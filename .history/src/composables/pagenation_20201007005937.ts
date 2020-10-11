import { computed, ComputedRef, onMounted, reactive, ref } from '@vue/composition-api';

type Pagenation = {
    current: number;
    pages: number[],
    last: number | undefined;
    isPrev: boolean;
    isNext: boolean;
};

export default function usePagenation() {
    const pagenation = reactive<Pagenation>({
        current: 1,
        pages: [],
        last: 1,
        isPrev: false,
        isNext: true,
    });
    const setPagenation = (current: number, last: number) => {
        let start = 0;
        let end = 0;
        const limit = 5;

        if (current <= limit) {
            start = 3;
            end = limit + 2;
        } else if (current > last - limit) {
            start = last - limit - 1;
            end = last - 2;
        } else {
            start = current - Math.floor(limit / 2);
            end = current + Math.floor(limit / 2);
        }

        const pages = [...Array(end + 1).keys()].slice(start);

        pagenation.current = current;
        pagenation.last = last;
        pagenation.isPrev = current <= 1;
        pagenation.isNext = current !== last;
        pagenation.pages = pages;
    }
}