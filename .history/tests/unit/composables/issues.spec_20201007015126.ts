import fetchMock from "jest-fetch-mock";
import useIssues from '@/composables/issueList';
import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';
import { factory } from "../../utils";
import { GithubIssue } from '../../fixtures/github';
import { githubUrl } from "@/consts";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe('composables/issues',() => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('useIssues', async () => {
        const { loading, issues } = useIssues();
        expect(loading.value).toBe(false);
        expect(issues.value.length).toBe(0);
    });

    it('fetchIssues', async () => {
        fetchMock.mockResponse(JSON.stringify([GithubIssue]));
        const { issues, pagenation, fetchIssues } = useIssues();
        await fetchIssues(1);
        expect(fetchMock.mock.calls[0][0]).toBe(githubUrl + "issues?page=1&amp;per_page=10");
        expect(issues.value).toEqual([GithubIssue]);
        expect(pagenation.value.current).toBe(1);
        await fetchIssues(2);
        expect(fetchMock.mock.calls[0][0]).toBe(githubUrl + "issues?page=2&amp;per_page=10");
        expect(pagenation.value.current).toBe(2);
    });

});