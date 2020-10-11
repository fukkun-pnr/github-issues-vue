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

    it("", () => {
        fetchMock.mockResponseOnce(JSON.stringify());
        const { get, post, loading } = useApi();
        expect(loading.value).toBe(false);

    });
});