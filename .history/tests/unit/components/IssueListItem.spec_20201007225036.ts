import { shallowMount } from '@vue/test-utils'
import IssueItem from '@/components/IssueItem.vue'
import { GithubIssue } from '../../fixtures/github';
import { factory } from '../../utils';

describe('IssueList.vue', () => {
  //  const mock = 
  it('replace slot contents', () => {
    const wrapper = shallowMount(IssueItem, {
      propsData: {
          item: GithubIssue,

        },
    });
    expect(wrapper.find(".issue-list-item").exists()).toBe(true);
  })

  it('iterable issueList', () => {
    const wrapper = shallowMount(IssueList, {
        propsData: { data: [GithubIssue, factory(GithubIssue,{ node_id: "test"})] },
        scopedSlots: {
            listItem: '<div data-test="slot-contents">{{ props.item.node_id }}</div>',
        }
      });
      const slotContents = wrapper.findAll('[data-test="slot-contents"]');
      expect(slotContents.at(0).text()).toBe(GithubIssue.node_id);
      expect(slotContents.at(1).text()).toBe("test");
  });
})
