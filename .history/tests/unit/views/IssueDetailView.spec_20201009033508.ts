import { shallowMount } from '@vue/test-utils'
import IssueListView from '@/views/IssueListView.vue';
import { GithubIssue } from '../../fixtures/github';
import { mapKeysCamelCase } from '@/utils';
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi, { ref } from '@vue/composition-api';

import * as useIssueDetail from "@/composables/issueDetail";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);


let fetchIssueDetailMock = jest.fn();
const useIssueDetailMock = {
    loading: ref(true),
    issue: mapKeysCamelCase(GithubIssue),
    fetchIssueDetail: fetchIssueDetailMock,
}

describe('IssueListView.vue', () => {
    beforeEach(() => {
        fetchIssueDetailMock.mockReset();
    });

    it('show loading', () => {
        jest.spyOn(useIssueDetail, "default").mockReturnValue(useIssueDetailMock);
        const wrapper = shallowMount(IssueListView, {
            localVue,
        });

        expect(wrapper.find(".issue-list-view").exists()).toBe(true);
        expect(fetchIssueDetailMock).toBeCalledWith(1);
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
        expect(pagenation.props().pagenation).toBe(Pagenation);
    });

    it("beforeRouteUpdate", () => {
        jest.spyOn(useIssueList, "default").mockReturnValue(useIssueListMock);

        const wrapper = shallowMount(IssueListView, {
            localVue,
        });
        const beforeRouteUpdate = wrapper.vm.$options.beforeRouteUpdate;
        let nextFun = jest.fn();

        const $route = wrapper.vm.$route;

        beforeRouteUpdate?.call(wrapper.vm, { ...$route, query: { page: "3" } }, { ...$route, query: { page: "1" } }, nextFun);

        expect(fetchIssueListMock).toBeCalledTimes(2);
        expect(fetchIssueListMock).toBeCalledWith(3);
        expect(nextFun).toBeCalledTimes(1);
    });
})
