import { computed, ComputedRef, onMounted, reactive, ref } from '@vue/composition-api';
import useApi from '@/composables/api';

import { githubUrl } from "@/consts";

type Issues = {
    pagenation: Pagenation;
    result: Github.Issues;
    links: string | null;
};

type Pagenation = {
    page: number;
    lastPage: number | undefined;
    nextPage: number | undefined;
    prevPage: number | undefined;
    isPrev: boolean;
    isNext: boolean;
};

export default function useIssueList() {
    const { get, loading } = useApi();

    const _issues = reactive<Issues>({
        pagenation: {
            page: 1,
            lastPage: undefined,
            nextPage: undefined,
            prevPage: undefined,
            isPrev: false,
            isNext: true,
        },
        result: [],
        links: null,
    });

    const issues = computed<Github.Issues>(() => _issues.result);
    const pagenation = computed<Pagenation>(() => _issues.pagenation);

    const fetchIssues = async (page = 1, perPage = 10) => {
        const result = await get<Github.Issues>(githubUrl + 'issues?page=' + page + '&amp;per_page=' + perPage);

        _issues.pagenation.page = page;
        _issues.result = result.contents;
        _issues.links = result.headers.get("Link");
        _issues.pagenation.isPrev = page != 1;

        const links = result.headers.get("Link");
        links?.split(",").map((p) => {
            const rel = p.match(/rel="(.*)"/)?.[1];
            const page = p.match(/\?page=(\d+)/)?.[1];
            if(!rel || !page) {
                throw new Error("not valid format Links");
            }
            return [rel, page];
        });
    };

    return {
        loading,
        issues,
        pagenation,
        fetchIssues,
    };
}