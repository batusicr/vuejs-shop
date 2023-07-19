import { mount } from '@vue/test-utils';
import CartItem from './CartItem.vue';

const testProduct = {
    image: 'test-image.jpg',
    title: 'Test Product',
    category: 'Test Category',
    price: 99.99,
    quantity: 3
};

describe('CartItem', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(CartItem, {
            props: {
                product: testProduct,
                onUpdateQuantity(e) {
                    wrapper.setProps({
                        product: {
                            ...e.product,
                            quantity: e.quantity
                        }
                    });
                }
            }
        });
    });

    it('renders', () => {
        expect(wrapper.find('.product-img').attributes('src')).toBe(testProduct.image);
        expect(wrapper.find('.product-img').attributes('alt')).toBe(testProduct.title);
        expect(wrapper.find('h5').text()).toBe(testProduct.title);
        expect(wrapper.findAll('.text-muted')[0].text()).toContain(`Category: ${testProduct.category}`);
        expect(wrapper.findAll('.text-muted')[1].text()).toContain(`Price: ${testProduct.price}€`);
        expect(wrapper.find('input[type="number"]').element.value).toBe(testProduct.quantity.toString());
    });

    it('emits "remove-from-cart" event when the "Remove" button is clicked', async () => {
        await wrapper.find('.remove-button').trigger('click');

        expect(wrapper.emitted('remove-from-cart')).toBeTruthy();
        expect(wrapper.emitted('remove-from-cart')[0]).toEqual([testProduct]);
    });

    it('emits "update-quantity" event when quantity input changes', async () => {
        await wrapper.find('input[type="number"]').setValue(7);

        expect(wrapper.emitted('update-quantity')).toBeTruthy();
        expect(wrapper.emitted('update-quantity')[0]).toEqual([
            {
                product: testProduct,
                quantity: 7
            }
        ]);
    });

    it(`sets quantity to 1 when input is non-numeric or negative`, async () => {
        const invalidValues = ['abc', -5];

        for (const value of invalidValues) {
            await wrapper.find('input[type="number"]').setValue(value);

            expect(wrapper.props('product').quantity).toBe(1);
        }
    });
});
