import { shallowMount } from '@vue/test-utils'
import IssueListView from '@/views/IssueListView.vue';
import { GithubIssue } from '../../fixtures/github';
import { mapKeysCamelCase } from '@/utils';
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi, { ref } from '@vue/composition-api';

import * as issueList from "@/composables/issueList";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

//jest.mock("@/composiables/issueList");

const Pagenation = {
    current: 1,
    start: [1, 2],
    center: [3, 4, 5],
    end: [6, 7],
    isStartDot: true,
    isEndDot: true,
    isPrev: false,
    isNext: true
}

let fetchIssueListMock = jest.fn();
const useIssueListMock = {
    loading: ref(true),
    issues: mapKeysCamelCase([GithubIssue]),
    fetchIssueList: fetchIssueListMock,
    pagenation: ref(Pagenation),
}

describe('IssueListView.vue', () => {
    beforeEach(() => {
        fetchIssueListMock.mockReset();
    });

    it('check loading', () => {
        jest.spyOn(issueList, "default").mockReturnValue(useIssueListMock);
        const wrapper = shallowMount(IssueListView, {
            localVue,
        });
        expect(fetchIssueListMock).toBeCalled();
        expect(wrapper.find("indicator-stub").exists()).toBe(true);
    });

    it('route props page', () => {
        jest.spyOn(issueList, "default").mockReturnValue(useIssueListMock);

        const $route = { query: { page: 2 } };
        const wrapper = shallowMount(IssueListView, {
            localVue,
            mocks: {
                $route
            }
        });
        expect(wrapper.find("indicator-stub").exists()).toBe(true);

        expect(fetchIssueListMock).toBeCalled();
        expect(fetchIssueListMock).toBeCalledWith(2);
    });
})
