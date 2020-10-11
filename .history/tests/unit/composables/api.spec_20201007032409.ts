import fetchMock from "jest-fetch-mock";
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi, { reactive } from '@vue/composition-api';
import useApi from '@/composables/api';
import { GithubIssue } from '../../fixtures/github';
import { mapKeysCamelCase } from '@/utils';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe('composables/api',() => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it("loading", async () => {
        const { get, loading } = useApi();
        expect(loading.value).toBe(false);
        const p = get("");
        expect(loading.value).toBe(true);
        const res = await p;
        expect(loading.value).toBe(false);
    });

    it("get", async () => {
        fetchMock.mockResponseOnce(JSON.stringify([GithubIssue]));
        const { get, loading } = useApi();
        const res = await get<Github.Issues>("");
        expect(res.headers).not.toBeNull();
        expect(res.contents).toEqual(mapKeysCamelCase([GithubIssue]));
    });
});