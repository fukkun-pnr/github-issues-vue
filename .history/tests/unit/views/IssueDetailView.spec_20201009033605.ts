import { shallowMount } from '@vue/test-utils'
import IssueListView from '@/views/IssueDetailView.vue';
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

    it('show list', () => {
        jest.spyOn(useIssueDetail, "default").mockReturnValue({
            ...useIssueDetailMock,
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

})
