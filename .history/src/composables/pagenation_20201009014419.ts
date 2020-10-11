import { computed, ComputedRef, onMounted, reactive, ref } from '@vue/composition-api';

type PagenationState = {
    current: number;
    last: number;
    lessThanSize: boolean;
};

export type PagenationData = {
    current: number;
    start: number[];
    center: number[];
    end: number[];
    isPrev: boolean;
    isNext: boolean;
}

export default function usePagenation(size = 5) {
    const _pagenation = reactive<PagenationState>({
        current: 1,
        last: 1,
        lessThanSize: true,
    });

    const setPagenation = (current: number, last: number) => {
        _pagenation.current = current;
        _pagenation.last = last;
    };

    const range = (start: number, end: number) => [...Array(end + 1).keys()].slice(start);

    const pagenation = computed<PagenationData>(() => {
        const lessThanSize = _pagenation.last < size;
        const last = _pagenation.last;
        const current = _pagenation.current;
        let isStartDot;
        let isEndDot;

        const start = range(1, lessThanSize ? last : 2);

        const center = (() => {
            if (lessThanSize) {
                return [];
            }

            let begin = 0;
            let finish = 0;

            if (current <= size) {
                begin = 3;
                finish = size + 2;
            } else if (current > last - size) {
                begin = last - size - 1;
                finish = last - 2;
            } else {
                begin = current - Math.floor(size / 2);
                finish = current + Math.floor(size / 2);
            }
            return range(begin, finish);
        })();

        const end = lessThanSize ? [] : range(last - 1, last);

        return {
            current,
            start,
            center,
            end,
            isPrev: current > 1,
            isNext: current !== last,
        };
    });

    return {
        pagenation,
        setPagenation
    };
}