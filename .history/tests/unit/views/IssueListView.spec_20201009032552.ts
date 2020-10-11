import { shallowMount } from '@vue/test-utils'
import IssueListView from '@/views/IssueListView.vue';
import { GithubIssue } from '../../fixtures/github';
import { mapKeysCamelCase } from '@/utils';
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi, { ref } from '@vue/composition-api';

import * as useIssueList from "@/composables/issueList";

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

    it('show loading', () => {
        jest.spyOn(useIssueList, "default").mockReturnValue(useIssueListMock);
        const wrapper = shallowMount(IssueListView, {
            localVue,
        });

        expect(wrapper.find(".issue-list-view").exists()).toBe(true);
        expect(fetchIssueListMock).toBeCalled();
        expect(fetchIssueListMock).toBeCalledWith(1);
        expect(wrapper.find("indicator-stub").exists()).toBe(true);
    });

    it('change route props', () => {
        jest.spyOn(useIssueList, "default").mockReturnValue(useIssueListMock);

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
        jest.spyOn(useIssueList, "default").mockReturnValue({
            ...useIssueListMock,
            loading: ref(false),
        });
        const wrapper = shallowMount(IssueListView, {
            localVue,
        });

        const issueList = wrapper.find("issueList-stub");
        const pagenation = wrapper.find("pagenation-stub");
        expect(wrapper.find("indicator-stub").exists()).toBe(false);
        expect(issueList.exists()).toBe(true);
        expect(pagenation.exists()).toBe(true);
        expect(issueList.props().data).toBe(useIssueListMock.issues);
        expect(pagenation.props().pagenation).toBe(useIssueListMock.pagenation);
    });

    it("change route props", () => {
        jest.spyOn(useIssueList, "default").mockReturnValue(useIssueListMock);

        const wrapper = shallowMount(IssueListView, {
            localVue,
        });
        const beforeRouteUpdate = wrapper.vm.$options.beforeRouteUpdate;
        let nextFun = jest.fn();

        beforeRouteUpdate?.call(wrapper.vm, "toObj", "fromObj", nextFun);
    });
})
