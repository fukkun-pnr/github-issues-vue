import { shallowMount } from '@vue/test-utils'
import IssueItem from '@/components/IssueItem.vue'
import { GithubIssue } from '../../fixtures/github';

describe('IssueList.vue', () => {
    const onClickMock = jest.fn();
    it('replace slot contents', () => {
        const wrapper = shallowMount(IssueItem, {
            propsData: {
                item: GithubIssue,
                onItemClick: onClickMock,
            },
        });
        expect(wrapper.find(".issue-list-item").exists()).toBe(true);
        expect(wrapper.contains(GithubIssue.title)).toBe(true);
    })
})
