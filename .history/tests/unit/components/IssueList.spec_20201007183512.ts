import { shallowMount } from '@vue/test-utils'
import IssueList from '@/components/IssueList.vue'
import { GithubIssue } from '../../fixtures/github';
import { factory } from '../utils';

describe('IssueList.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(IssueList, {
      propsData: { data: [GithubIssue, factory(GithubIssue,{ node_id: "test"})] },
      scopedSlots: {
          listItem: '<div data-test="slot-contents">{{ props.item.node_id }}</div>',
      }
    });
    expect(wrapper.find(".issue-list").exists()).toBe(true);
    const slotContent = wrapper.find('[data-test="slot-contents"]');
    expect(slotContent.exists()).toBe(true);
    expect(slotContent.text()).toBe(GithubIssue.node_id);
  })
})
