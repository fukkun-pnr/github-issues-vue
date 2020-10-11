import { shallowMount } from '@vue/test-utils'
import Indicator from '@/components/Indicator.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Indicator, {
      loading: true
    });
    expect(wrapper.text()).toMatch(msg);
  });
});