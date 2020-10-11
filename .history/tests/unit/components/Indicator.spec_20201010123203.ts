import { shallowMount } from '@vue/test-utils'
import Indicator from '@/components/Indicator.vue'

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(Indicator, {
            propsData: { loading: true }
        });
        expect(wrapper.find(".indicator").exists()).toBe(true);
    });
});
