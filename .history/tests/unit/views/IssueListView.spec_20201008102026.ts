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
        const fetchIssueListMock = jest.fn();
        jest.spyOn(issueList, "default").mockReturnValue({
            loading: ref(true),
            issues: mapKeysCamelCase([GithubIssue]),
            fetchIssueList: fetchIssueListMock,
            pagenation: ref({
                current: 1,
                start: [1, 2],
                center: [3, 4, 5],
                end: [6, 7],
                isPrev: false,
                isNext: true
            }),
        });
        const wrapper = shallowMount(IssueListView, {
            localVue,
        });

        expect();
    });
})
