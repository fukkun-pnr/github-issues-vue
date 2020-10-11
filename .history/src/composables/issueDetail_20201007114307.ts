import { computed, ComputedRef, onMounted, reactive, ref } from '@vue/composition-api';
import useApi from '@/composables/api';

import { githubUrl } from "@/consts";

export default function useIssue() {
    const { get, loading } = useApi();
    const _issue = ref<Github.Issue>({
        url: "",
        repositoryUrl: "",
        labelsUrl: "",
        commentsUrl: "",
        eventsUrl: "",
        htmlUrl: "",
        id: 0,
        nodeId: "",
        number: 0,
        title: "",
        user: null,
        labels: [],
        state: "",
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        createdAt: "",
        updatedAt: "",
        closedAt: "",
        authorAssociation: "",
        activeLockReason: null,
        body: "",
        performedViaGithubApp: null,
        pullRequest: null,
        repository: null,
    });
    const issue = computed<Github.Issue>(() => _issue.value);

    const fetchIssueDetail = async (id: number) => {
        const res = await get<Github.Issue>(githubUrl + 'issues/' + id);
        _issue.value = res.contents;
    };

    return {
        loading,
        issue,
        fetchIssueDetail
    };
}