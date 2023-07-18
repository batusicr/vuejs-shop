export default {
    namespaced: true,
    state() {
        return {
            products: []
        }
    },
    getters: {
        cartProducts(state) {
            return state.products;
        }
    },
    actions: {
        addToCart(context, product) {
            context.commit('addToCart', product);
        },
        removeFromCart(context, product) {
            context.commit('removeFromCart', product);
        },
        clearCart(context) {
            context.commit('clearCart');
        },
        updateQuantity(context, payload) {
            context.commit('updateQuantity', payload);
        }
    },
    mutations: {
        addToCart(state, product) {
            const targetProduct = state.products.find((p) => p.id === product.id);

            if (!targetProduct) {
                state.products.push({...product, quantity: 1});
            }
        },
        removeFromCart(state, product) {
            const productIndex = state.products.findIndex((p) => p.id === product.id);

            if (productIndex !== -1) {
                state.products.splice(productIndex, 1);
            }
        },
        clearCart(state) {
            state.products = [];
        },
        updateQuantity(state, payload) {
            const { product, quantity } = payload;
            const targetProduct = state.products.find((p) => p.id === product.id);

            if (targetProduct) {
                targetProduct.quantity = quantity;
            }
        }
    }
};