import { shallowMount } from '@vue/test-utils';
import Card from './Card.vue';

const testProduct = {
    image: 'test-image.jpg',
    title: 'Test Product',
    category: 'Test Category',
    price: 99.99
};

describe('Card', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallowMount(Card, {
            props: {
                product: testProduct
            }
        });
    });

    it('renders', () => {
        expect(wrapper.find('.product-img').attributes('src')).toBe(testProduct.image);
        expect(wrapper.find('.product-img').attributes('alt')).toBe(testProduct.title);
        expect(wrapper.find('.card-title').text()).toBe(testProduct.title);
        expect(wrapper.findAll('.card-text')[0].text()).toContain(`Category: ${testProduct.category}`);
        expect(wrapper.findAll('.card-text')[1].text()).toContain(`Price: ${testProduct.price}€`);
    });

    it('emits "add-to-cart" event when the "Add to Cart" button is clicked', async () => {
        await wrapper.find('.btn-primary').trigger('click');
        expect(wrapper.emitted('add-to-cart')).toBeTruthy();
        expect(wrapper.emitted('add-to-cart')[0]).toEqual([testProduct]);
    });
});