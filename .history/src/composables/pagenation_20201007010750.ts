import { computed, ComputedRef, onMounted, reactive, ref } from '@vue/composition-api';

type Pagenation = {
    current: number;
    last: number;
    isPrev: boolean;
    isNext: boolean;
};

export default function usePagenation(size: number = 5) {
    const _pagenation = reactive<Pagenation>({
        current: 1,
        last: 1,
        isPrev: false,
        isNext: true,
    });

    const setPagenation = (current: number, last: number) => {
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
        _pagenation.current = current;
        _pagenation.last = last;
        _pagenation.isPrev = current <= 1;
        _pagenation.isNext = current !== last;
    }


    const range = (start: number, end: number) =>  [...Array(end + 1).keys()].slice(start);


    const pagenation = computed(() => ({
        start: () => {
            if(_pagenation.last < size) {

            }
        },
        center: () => {

        },
        end: () => {

        }
    }));
}