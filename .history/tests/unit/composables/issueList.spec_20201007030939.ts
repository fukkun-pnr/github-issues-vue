import fetchMock from "jest-fetch-mock";
import useIssueList from '@/composables/issueList';
import * as api from "@/composables/api";
import * as pagenation from '@/composables/pagenation';
import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import VueCompositionApi, { ref } from '@vue/composition-api';
import { factory } from "../../utils";
import { GithubIssue } from '../../fixtures/github';
import { githubUrl } from "@/consts";
import { mapKeysCamelCase } from '@/utils';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

let getMock: jest.Mock;
let setPagenationMock: jest.Mock;

describe('composables/issues',() => {
    beforeEach(() => {
        getMock = jest.fn();
        jest.spyOn(api, "default").mockReturnValue({
            get: getMock,
            post: jest.fn(),
            loading: ref(false)
        });

        setPagenationMock = jest.fn();
        jest.spyOn(pagenation, "default").mockReturnValue({
            pagenation: ref({
                current: 0,
                start: [],
                center: [],
                end: [],
                isPrev: false,
                isNext: false,
            }),
            setPagenation: setPagenationMock,
        });
        //fetchMock.resetMocks();
    });

    it('useIssues', async () => {
        const { loading, issues } = useIssueList();
        expect(issues.value.length).toBe(0);
        expect(loading.value).toBe(false);
    });

    it('fetchIssueList', async () => {
        const result = mapKeysCamelCase([GithubIssue]);
        getMock.mockResolvedValue({
            headers: {
                get: () => '<https://api.github.com/repositories/10270250/issues?page=2&amp=&per_page=10>; rel="next", <https://api.github.com/repositories/10270250/issues?page=59&amp=&per_page=10>; rel="last"',
            },
            contents: result
        });
        // fetchMock.mockResponse(JSON.stringify([GithubIssue]));
        const { issues, pagenation, fetchIssueList } = useIssueList();
        await fetchIssueList(1);
        expect(getMock.mock.calls.length).toBe(1);
        expect(issues.value).toEqual(result);
        expect(setPagenationMock.mock.calls[0][0]).toBe(1);

        await fetchIssueList(2);
        expect(getMock.mock.calls.length).toBe(2);
        //expect(getMock.mock.calls[0][0]).toBe(githubUrl + "issues?page=2&amp;per_page=10");
    });

});