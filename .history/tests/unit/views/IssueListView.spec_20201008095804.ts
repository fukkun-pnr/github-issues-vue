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

describe('IssueListView.vue', () => {
    beforeEach(() => {
    });

    it('check loading', () => {
        jest.spyOn(issueList, "default").mockReturnValue({
            loading: ref(true),
            issues: mapKeysCamelCase([GithubIssue]),
            fetchIssueList: jest.fn(),
            pagenation: {},
        });
        const wrapper = shallowMount(IssueListView, {
            localVue,
        });
    });
})
