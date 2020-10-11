import { shallowMount } from '@vue/test-utils'
import IssueListItem from '@/components/IssueListItem.vue'
import { GithubIssue } from '../../fixtures/github';
import { mapKeysCamelCase } from '@/utils';

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
        const wrapper = shallowMount(IssueListItem, {
            propsData: {
                item: GithubIssue,
                onItemClick: onClickMock,
            },
        });
        const link = wrapper.find("h4 > a");
        console.log(link.html());
        link.trigger("click.stop.prevent");
        //expect(onClickMock).toBeCalledWith(mapKeysCamelCase(GithubIssue));
        wrapper.vm.$data.onClick();
        expect(onClickMock).toBeCalledTimes(1);
    });
})
