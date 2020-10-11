import fetchMock from "jest-fetch-mock";
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';
import useApi from '@/composables/api';
import { GithubIssue } from '../../fixtures/github';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);


describe('composables/api',() => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it("", async () => {
        fetchMock.mockResponseOnce(JSON.stringify([GithubIssue]));
        const { get, post, loading } = useApi();
        expect(loading.value).toBe(false);
        const p = get("");
        expect(loading.value).toBe(true);
        const res = await p;
        expect(loading.value).toBe(false);
    });
});