
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
        expect(pagenation.value.isNext).toBe(true);
        expect(pagenation.value.start).toStrictEqual([1, 2]);
        expect(pagenation.value.center).toStrictEqual([3, 4, 5, 6, 7]);
    });
});