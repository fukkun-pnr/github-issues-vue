import { mount, shallowMount } from '@vue/test-utils'
import IssueListItem from '@/components/IssueListItem.vue'
import { GithubIssue } from '../../fixtures/github';
import { mapKeysCamelCase } from '@/utils';
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';


const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe('IssueListItem.vue', () => {
    it('view props', () => {
        const wrapper = shallowMount(IssueListItem, {
            propsData: {
                item: GithubIssue,
                onItemClick: jest.fn(),
            },
        });
        expect(wrapper.find(".issue-list-item").exists()).toBe(true);
        expect(wrapper.find("h4").text()).toBe(GithubIssue.title);
        expect(wrapper.find("p").text()).toBe("#" + GithubIssue.number.toString());
    });

    it('click trigger', () => {
        const onClickMock = jest.fn();
        const wrapper = mount(IssueListItem, {
            localVue,
            propsData: {
                item: GithubIssue,
                onItemClick: onClickMock,
            },
            stubs: {

            }
        });
        const link = wrapper.find("h4 > a");
        link.trigger("click.stop.prevent");
        expect(onClickMock).toBeCalledTimes(1);
        expect(onClickMock).toBeCalledWith(mapKeysCamelCase(GithubIssue));
    });
})
