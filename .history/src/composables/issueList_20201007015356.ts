import { computed, ComputedRef, onMounted, reactive, ref } from '@vue/composition-api';
import useApi from '@/composables/api';
import usePagenation from '@/composables/pagenation';

import { githubUrl } from "@/consts";

type Issues = {
    result: Github.Issues;
};

export default function useIssueList() {
    const { get, loading } = useApi();
    const { pagenation, setPagenation } = usePagenation();

    const _issues = reactive<Github.Issues>([]);

    const issues = computed<Github.Issues>(() => _issues.value);

    const fetchIssues = async (page = 1, perPage = 10) => {
        const result = await get<Github.Issues>(githubUrl + 'issues?page=' + page + '&amp;per_page=' + perPage);

        _issues.value = result.contents;

        const links = result.headers.get("Link")?.split(",").reduce<{[key: string]: number }>((p, c) => {
            const rel = c.match(/rel="(.*)"/)?.[1];
            const page = c.match(/\?page=(\d+)/)?.[1];
            if(!rel || !page) {
                return p;
            }
            p[rel] = Number(page);
            return p;
        },{});

        if(!links || !links["last"]) {
            throw new Error("not valid format Links");
        }

        setPagenation(page, links["last"]);
    };

    return {
        loading,
        issues,
        pagenation,
        fetchIssues,
    };
}