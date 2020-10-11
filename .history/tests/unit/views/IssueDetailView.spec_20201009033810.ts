import { shallowMount } from '@vue/test-utils'
import IssueDetailView from '@/views/IssueDetailView.vue';
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
        const wrapper = shallowMount(IssueDetailView, {
            localVue,
            props: {
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
        });

        expect(wrapper.find("indicator-stub").exists()).toBe(false);
    });

})
