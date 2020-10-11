
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';

import usePagenation from '@/composables/pagenation';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe('composables/pagenation',() => {
    it("usePagenation", () => {
        const { pagenation, setPagenation } = usePagenation(5);
        setPagenation(1, 10);
        expect(pagenation.value.current).toBe(1);
        expect(pagenation.value.isPrev).toBe(false);
    });
});