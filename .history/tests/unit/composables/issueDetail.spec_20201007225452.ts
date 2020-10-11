import useIssueDetail from '@/composables/issueDetail';
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

describe('composables/issueDetail', () => {
    beforeEach(() => {
        getMock = jest.fn();
        jest.spyOn(api, "default").mockReturnValue({
            get: getMock,
            post: jest.fn(),
            loading: ref(false)
        });
    });

    it('fetchIssueDetail', async () => {
        const { issue, fetchIssueDetail } = useIssueDetail();
        getMock.mockResolvedValue({
            contents: mapKeysCamelCase(GithubIssue)
        });
        await fetchIssueDetail(0);
        expect(getMock).toBeCalledWith(githubUrl + "issues/0");
        expect(issue.value).toStrictEqual(mapKeysCamelCase(GithubIssue));

        await fetchIssueDetail(1);
        expect(getMock).toBeCalledWith(githubUrl + "issues/1");
    });
});