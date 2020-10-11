import { shallowMount } from '@vue/test-utils'
import Pagenation from '@/components/Pagenation.vue'
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';
import VueRouter from 'vue-router'

const localVue = createLocalVue();
localVue.use(VueCompositionApi);
localVue.use(VueRouter)

describe('Pagenation.vue', () => {
    it('view props', () => {
        const wrapper = shallowMount(Pagenation, {
            localVue,
            propsData: {
                pageName: "issueList",
                pagenation: {
                    current: 1,
                    start: [1, 2],
                    center: [3, 4, 5],
                    end: [6, 7],
                    isStartDot: false,
                    isEndDot: false,
                    isPrev: false,
                    isNext: true
                }
            },
        });
        console.log(wrapper.html());
        expect(wrapper.find(".pagenation").exists()).toBe(true);
        expect(wrapper.findAll("li").length).toBe(11);
        expect(wrapper.findAll("router-link-stub").length).toBe(8);

    });
});
