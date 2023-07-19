import { shallowMount } from '@vue/test-utils';
import Pagination from './Pagination.vue';

const currentPage = 3;
const totalPages = 5;

describe('Pagination', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallowMount(Pagination, {
            props: {
                currentPage,
                totalPages,
                onPageChanged(e) {
                    wrapper.setProps({currentPage: e});
                }
            }
        });
    });

    it('renders the correct number of page links', () => {
        // Add 2 for 'previous' and 'next' buttons
        expect(wrapper.findAll('.page-link').length).toBe(totalPages + 2);
    });

    it('emits "page-changed" event when clicking on a page link', async () => {
        await wrapper.findAll('.page-link')[currentPage].trigger('click');
        expect(wrapper.emitted('page-changed')).toBeTruthy();
        expect(wrapper.emitted('page-changed')[0][0]).toBe(currentPage);
    });

    it('applies the "active" class to the current page link', () => {
        expect(wrapper.find('.page-item.active').text()).toBe(currentPage.toString());
    });

    it('applies the "disabled" class to the "Previous" and "Next" links when on the first and last page', async () => {
        const pageLinks = wrapper.findAll('.page-link');

        await pageLinks[1].trigger('click');
        expect(wrapper.find('.page-item.disabled:first-child').exists()).toBe(true);

        await pageLinks[pageLinks.length - 2].trigger('click');
        expect(wrapper.find('.page-item.disabled:last-child').exists()).toBe(true);
    });
});
