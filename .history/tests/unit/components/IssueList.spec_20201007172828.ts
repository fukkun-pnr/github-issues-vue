import { shallowMount } from '@vue/test-utils'
import IssueList from '@/components/IssueList.vue'
import { GithubIssue } from '../../fixtures/github';
import IssueListItem from '@/components/IssueListItem.vue';

describe('IssueList.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(IssueList, {
      propsData: { data: [GithubIssue] },
      scopedSlots: {
          listItem: '<div data-test="slot-contents">{{ props.id }}</div>',
      }
    })
    expect(wrapper.find(".issue-list").exists()).toBe(true);
    console.log(wrapper.html());
    const slotContent = wrapper.find('[data-test="slot-contents"]');
    expect(slotContent.exists()).toBe(true);
    expect(slotContent.text()).toBe(GithubIssue.id);
  })
})
