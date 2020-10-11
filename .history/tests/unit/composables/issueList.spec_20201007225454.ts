import useIssueList from '@/composables/issueList';
import * as api from "@/composables/api";
import * as pagenation from '@/composables/pagenation';
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi, { ref } from '@vue/composition-api';
import { GithubIssue } from '../../fixtures/github';
import { githubUrl } from "@/consts";
import { mapKeysCamelCase } from '@/utils';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

let getMock: jest.Mock;
let setPagenationMock: jest.Mock;

describe('composables/issueList', () => {
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
    });

    it('useIssues', async () => {
        const { loading, issues, pagenation } = useIssueList();
        expect(issues.value.length).toBe(0);
        expect(loading.value).toBe(false);
        expect(pagenation).not.toBeNull();
    });

    it('fetchIssueList', async () => {
        const result = mapKeysCamelCase([GithubIssue]);
        getMock.mockResolvedValue({
            headers: {
                get: () => '<https://api.github.com/repositories/10270250/issues?page=2&amp=&per_page=10>; rel="next", <https://api.github.com/repositories/10270250/issues?page=60&amp=&per_page=10>; rel="last"',
            },
            contents: result
        });
        const { issues, fetchIssueList } = useIssueList();
        await fetchIssueList(1);
        expect(getMock).toBeCalledTimes(1);
        expect(getMock).toBeCalledWith(githubUrl + "issues?page=1&amp;per_page=10");
        expect(setPagenationMock).toBeCalledWith(1, 60);
        expect(issues.value.length).toBe(1);
        expect(issues.value).toEqual(result);

        await fetchIssueList(2);
        expect(getMock).toBeCalledTimes(2);
        expect(getMock).toBeCalledWith(githubUrl + "issues?page=2&amp;per_page=10");
        expect(setPagenationMock).toBeCalledWith(2, 60);
    });

});