import { shallowMount } from '@vue/test-utils'
import IssueDetailView from '@/views/IssueDetailView.vue';
import { mapKeysCamelCase } from '@/utils';
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi, { ref } from '@vue/composition-api';

import * as useIssueDetail from "@/composables/issueDetail";
import GithubIssue from '../../fixtures/github-issue.json';

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
        const wrapper = shallowMount(IssueDetailView, {
            localVue,
            propsData: {
                id: 1,
            }
        });

        expect(wrapper.find(".issue-detail-view").exists()).toBe(true);
        expect(fetchIssueDetailMock).toBeCalledWith(1);
        expect(wrapper.find("indicator-stub").exists()).toBe(true);
    });

    it('show list', () => {
        jest.spyOn(useIssueDetail, "default").mockReturnValue({
            ...useIssueDetailMock,
            loading: ref(false),
        });
        const wrapper = shallowMount(IssueDetailView, {
            localVue,
            propsData: {
                id: 2,
            }
        });

        expect(wrapper.find("indicator-stub").exists()).toBe(false);
        expect(fetchIssueDetailMock).toBeCalledWith(2);
        const h2 = wrapper.find("h2");
        expect(h2.text()).toContain(useIssueDetailMock.issue.title);
        expect(h2.text()).toContain(useIssueDetailMock.issue.number);
        expect(wrapper.find("p").text()).toContain(useIssueDetailMock.issue.body);
    });

})
