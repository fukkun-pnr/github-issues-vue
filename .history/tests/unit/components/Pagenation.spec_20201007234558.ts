import { shallowMount } from '@vue/test-utils'
import Pagenation from '@/components/Pagenation.vue'
import { factory } from '../../utils';

import { githubUrl } from "@/consts";


describe('Pagenation.vue', () => {
    it('view props', () => {
        const wrapper = shallowMount(Pagenation, {
            propsData: {
                prefixUrl: githubUrl,
                pagenation: {

                }
            },
        });
    });
});
