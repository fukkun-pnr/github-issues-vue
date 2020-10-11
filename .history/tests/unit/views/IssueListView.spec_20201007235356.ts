import { shallowMount } from '@vue/test-utils'
import IssueListView from '@/views/IssueListView.vue'
import { GithubIssue } from '../../fixtures/github';
import { mapKeysCamelCase } from '@/utils';
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe('IssueListView.vue', () => {
    it('view props', () => {
        const wrapper = shallowMount(IssueListItem, {
            localVue,
        });
        expect(wrapper.find(".issue-list-item").exists()).toBe(true);
        expect(wrapper.find("h4").text()).toBe(GithubIssue.title);
        expect(wrapper.find("p").text()).toBe("#" + GithubIssue.number.toString());
    });

    it('click trigger', () => {
        const onClickMock = jest.fn();
        const wrapper = shallowMount(IssueListItem, {
            localVue,
            propsData: {
                item: mapKeysCamelCase(GithubIssue),
                onItemClick: onClickMock,
            },
        });
        const link = wrapper.find("h4 > a");
        link.trigger("click.stop.prevent");
        expect(onClickMock).toBeCalledTimes(1);
        expect(onClickMock).toBeCalledWith(mapKeysCamelCase(GithubIssue));
    });
})
