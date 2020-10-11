import { shallowMount } from '@vue/test-utils'
import IssueList from '@/components/IssueList.vue'
import { GithubIssue } from '../../fixtures/github';

describe('IssueList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(IssueList, {
      propsData: { data: [GithubIssue] }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
