import { shallowMount } from '@vue/test-utils'
import IssueList from '@/components/IssueList.vue'
import { GithubIssue } from '../../fixtures/github';
import IssueListItem from '@/components/IssueListItem.vue';

describe('IssueList.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(IssueList, {
      propsData: { data: [GithubIssue] },
      slots: {
          listItem: '<div data-test="slot-contents">{{ item.id }}</div>',
      }
    })
    expect(wrapper.find(".issue-list").exists()).toBe(true);

    const slotContent = wrapper.find('[data-test="slotContent"]');
    expect(slotContent.exists()).toBe(true);
    expect(slotContent.text()).toBe(GithubIssue.id);
  })
})
