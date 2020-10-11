import { shallowMount } from '@vue/test-utils'
import Pagenation from '@/components/Pagenation.vue'
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';
import VueRouter from 'vue-router'

const localVue = createLocalVue();
localVue.use(VueCompositionApi);
localVue.use(VueRouter)

const pagenationMock = {
    current: 1,
    start: [1, 2],
    center: [3, 4, 5],
    end: [6, 7],
    isStartDot: false,
    isEndDot: false,
    isPrev: false,
    isNext: false
}

describe('Pagenation.vue', () => {
    it('view props', () => {
        const wrapper = shallowMount(Pagenation, {
            localVue,
            propsData: {
                pageName: "issueList",
                pagenation: pagenationMock,
            },
        });
        const li = wrapper.findAll("li");
        expect(wrapper.find(".pagenation").exists()).toBe(true);
        expect(li.length).toBe(11);
        expect(wrapper.findAll("router-link-stub").length).toBe(7);
        expect(wrapper.find(".active > router-link-stub").text()).toBe("1");
        ["<", "1", "2", "...", "3", "4", "5", "...", "6", "7", ">"].forEach((v, i) => {
            expect(li.at(i).text()).toContain(v);
        });
        expect(li.at(0).find("router-link-stub").exists()).toBe(false);
        expect(li.at(10).find("router-link-stub").exists()).toBe(false);
        expect(li.at(3).isVisible()).toBe(false);
        expect(li.at(7).isVisible()).toBe(false);
        console.log(wrapper.html());
    });

    it("change props", () => {
        const wrapper = shallowMount(Pagenation, {
            localVue,
            propsData: {
                pageName: "issueList",
                pagenation: {
                    ...pagenationMock,
                    current: 2,
                    start: [1, 2, 3],
                    center: [],
                    end: [],
                    isStartDot: true,
                    isEndDot: true,
                    isPrev: true,
                    isNext: true
                },
            }
        });
        const li = wrapper.findAll("li");
        expect(wrapper.find(".active > router-link-stub").text()).toBe("2");
        expect(li.length).toBe(7);
        ["<", "1", "2", "3", "...", "...", ">"].forEach((v, i) => {
            expect(li.at(i).text()).toContain(v);
        });
        expect(li.at(0).find("router-link-stub").exists()).toBe(true);
        expect(li.at(6).find("router-link-stub").exists()).toBe(true);
        expect(li.at(4).isVisible()).toBe(true);
        expect(li.at(5).isVisible()).toBe(false);
        console.log(wrapper.html());
    });
});
