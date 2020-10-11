import { computed, ComputedRef, onMounted, reactive, ref } from '@vue/composition-api';

type PagenationState = {
    current: number;
    last: number;
    lessThanSize: boolean,
    isPrev: boolean;
    isNext: boolean;
};

type Pagenation = {
    start: number[];
    center: number[];
    end: number[];
}

export default function usePagenation(size: number = 5) {
    const _pagenation = reactive<PagenationState>({
        current: 1,
        last: 1,
        lessThanSize: true,
        isPrev: false,
        isNext: true,
    });

    const setPagenation = (current: number, last: number) => {

        _pagenation.current = current;
        _pagenation.last = last;
        _pagenation.lessThanSize = last < size;
        _pagenation.isPrev = current <= 1;
        _pagenation.isNext = current !== last;
    }


    const range = (start: number, end: number) =>  [...Array(end + 1).keys()].slice(start);

    const pagenation = computed<Pagenation>(() => ({
        start: () => {
            if(_pagenation.lessThanSize) {
                return range(1, _pagenation.last);
            }
            return range(1, 2);
        },
        center: () => {
            const current = _pagenation.current;
            const last = _pagenation.last;

            if(_pagenation.lessThanSize) {
                return [];
            }

            let start = 0;
            let end = 0;
    
            if (current <= size) {
                start = 3;
                end = size + 2;
            } else if (current > last - size) {
                start = last - size - 1;
                end = last - 2;
            } else {
                start = current - Math.floor(size / 2);
                end = current + Math.floor(size / 2);
            }
            return range(start, end);
        },
        end: () => {
            const last = _pagenation.last;
            if(_pagenation.lessThanSize) {
                return [];
            }
            return range(last - 1, last);
        }
    }));
}