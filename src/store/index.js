import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cartProducts: []
        }
    },
    mutations: {
        addToCart(state, product) {
            const targetProduct = state.cartProducts.find((p) => p.id === product.id);

            if (!targetProduct) {
                state.cartProducts.push({...product, quantity: 1});
            }
        },
        removeFromCart(state, product) {
            const productIndex = state.cartProducts.findIndex((p) => p.id === product.id);

            if (productIndex !== -1) {
                state.cartProducts.splice(productIndex, 1);
            }
        },
        updateQuantity(state, payload) {
            const { product, quantity } = payload;
            const targetProduct = state.cartProducts.find((p) => p.id === product.id);

            if (targetProduct) {
                targetProduct.quantity = quantity;
            }
        }
    }
});

export default store;