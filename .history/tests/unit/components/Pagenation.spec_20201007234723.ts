import { shallowMount } from '@vue/test-utils'
import Pagenation from '@/components/Pagenation.vue'
import { githubUrl } from "@/consts";
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);


describe('Pagenation.vue', () => {
    it('view props', () => {
        const wrapper = shallowMount(Pagenation, {
            localVue,
            propsData: {
                prefixUrl: githubUrl,
                pagenation: {
                    current: 1,
                    start: [1, 2],
                    center: [3, 4, 5],
                    end: [6, 7],
                }
            },
        });
    });
});
