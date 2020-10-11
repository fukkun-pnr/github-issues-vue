import { shallowMount } from '@vue/test-utils'
import IssueList from '@/components/IssueList.vue'
import { GithubIssue } from '../../fixtures/github';
import { factory } from '../../utils';

describe('IssueList.vue', () => {
    it('replace slot contents', () => {
        const wrapper = shallowMount(IssueList, {
            propsData: { data: [GithubIssue] },
            scopedSlots: {
                listItem: '<div data-test="slot-contents">{{ props.item.node_id }}</div>',
            }
        });
        expect(wrapper.find(".issue-list").exists()).toBe(true);
        const slotContents = wrapper.find('[data-test="slot-contents"]');
        expect(slotContents.exists()).toBe(true);
        expect(slotContents.text()).toBe(GithubIssue.node_id);
    })

    it('iterable issueList', () => {
        const wrapper = shallowMount(IssueList, {
            propsData: { data: [GithubIssue, factory(GithubIssue, { node_id: "test" })] },
            scopedSlots: {
                listItem: '<div data-test="slot-contents">{{ props.item.node_id }}</div>',
            }
        });
        const slotContents = wrapper.findAll('[data-test="slot-contents"]');
        expect(slotContents.at(0).text()).toBe(GithubIssue.node_id);
        expect(slotContents.at(1).text()).toBe("test");
    });
})
