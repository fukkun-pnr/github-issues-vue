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

describe('IssueListView.vue', () => {
    beforeEach(() => {
    });

    it('check loading', () => {
        const fetchIssueListMock = jest.fn();
        jest.spyOn(issueList, "default").mockReturnValue({
            loading: ref(true),
            issues: mapKeysCamelCase([GithubIssue]),
            fetchIssueList: fetchIssueListMock,
            pagenation: ref(Pagenation),
        });
        const wrapper = shallowMount(IssueListView, {
            localVue,
        });

        expect(fetchIssueListMock).toBeCalled();
    });
})
