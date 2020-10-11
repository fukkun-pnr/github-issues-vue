import { shallowMount } from '@vue/test-utils'
import IssueListView from '@/views/IssueListView.vue';
import { GithubIssue } from '../../fixtures/github';
import { mapKeysCamelCase } from '@/utils';
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';

import * as issueList from "@/composables/issueList";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

//jest.mock("@/composiables/issueList");

describe('IssueListView.vue', () => {
    beforeEach(() => {
        jest.spyOn(issueList.default, "useIssueList", () => {
            loading: true,
                issueList: mapKeysCamelCase([GithubIssue]),
                    fetchIssueList: jest.fn(),
        });
    });

    it('view props', () => {
        const wrapper = shallowMount(IssueListView, {
            localVue,
        });
    });
})
