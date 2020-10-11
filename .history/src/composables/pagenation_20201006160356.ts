import { computed, ComputedRef, onMounted, reactive, ref } from '@vue/composition-api';

type Pagenation = {
    page: number,
    last: number,
    isPrev: boolean,
    isNext: boolean,
}

export default function usePagenation() {
    const pagenation = reactive<Pagenation>({
        page: 1,
        last: 0,
        isPrev: false,
        isNext: true,
    });

    const next = () => pagenation.isNext && pagenation.page+1;
}