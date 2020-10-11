import { shallowMount } from '@vue/test-utils'
import IssueListView from '@/views/IssueListView.vue';
import { GithubIssue } from '../../fixtures/github';
import { mapKeysCamelCase } from '@/utils';
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi, { ref } from '@vue/composition-api';

import * as issueList from "@/composables/issueList";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

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

        expect(wrapper.find(".issue-list-view").exists()).toBe(true);
        expect(fetchIssueListMock).toBeCalled();
        expect(fetchIssueListMock).toBeCalledWith(1);
        expect(wrapper.find("indicator-stub").exists()).toBe(true);
    });

    it('route props page', () => {
        jest.spyOn(issueList, "default").mockReturnValue(useIssueListMock);

        shallowMount(IssueListView, {
            localVue,
            mocks: {
                $route: { query: { page: 2 } }
            }
        });
        expect(fetchIssueListMock).toBeCalled();
        expect(fetchIssueListMock).toBeCalledWith(2);
    });

    it('show list', () => {
        jest.spyOn(issueList, "default").mockReturnValue({
            ...useIssueListMock,
            loading: ref(false),
        });
        const wrapper = shallowMount(IssueListView, {
            localVue,
        });

        expect(wrapper.find("indicator-stub").exists()).toBe(false);
        expect(wrapper.find("issue-list-stub").exists()).toBe(false);

    });
})
