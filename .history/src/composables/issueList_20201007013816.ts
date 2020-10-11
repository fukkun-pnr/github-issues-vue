import { computed, ComputedRef, onMounted, reactive, ref } from '@vue/composition-api';
import useApi from '@/composables/api';
import usePagenation from '@/composables/pagenation';

import { githubUrl } from "@/consts";

type Issues = {
    page: number,
    last: number,
    result: Github.Issues;
    links: string | null;
};

export default function useIssueList() {
    const { get, loading } = useApi();
    const { pagenation, setPagenation } = usePagenation();

    const _issues = reactive<Issues>({
        page: 1,
        last: 1,
        result: [],
        links: null,
    });

    const issues = computed<Github.Issues>(() => _issues.result);

    const fetchIssues = async (page = 1, perPage = 10) => {
        const result = await get<Github.Issues>(githubUrl + 'issues?page=' + page + '&amp;per_page=' + perPage);

        _issues.page = page;
        _issues.result = result.contents;

        const links = result.headers.get("Link")?.split(",").map((p) => {
            const rel = p.match(/rel="(.*)"/)?.[1];
            const page = p.match(/\?page=(\d+)/)?.[1];
            if(!rel || !page) {
                throw new Error("not valid format Links");
            }
            return [rel, page];
        });

        setPagenation(page, links["last"] as number);
    };

    return {
        loading,
        issues,
        pagenation,
        fetchIssues,
    };
}