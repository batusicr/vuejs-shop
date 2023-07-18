import axios from 'axios';

export default {
    namespaced: true,
    state() {
        return {
            authToken: null
        }
    },
    getters: {
        isAuth(state) {
            return !!state.authToken;
        },
        authToken(state) {
            return state.authToken;
        }
    },
    actions: {
        async login(context, payload) {
            try {
                const response = await axios.post('https://fakestoreapi.com/auth/login', {
                    username: payload.username,
                    password: payload.password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.data.token) {
                    throw new Error('Authentication failed, check your credentials.');
                }

                context.commit('login', response.data.token);
            } catch (error) {
                throw new Error(error.message || 'Authentication failed');
            }
        },
        logout(context) {
            context.commit('logout');
            context.commit('cart/clearCart', null, { root: true });
        }
    },
    mutations: {
        login(state, authToken) {
            state.authToken = authToken;
        },
        logout(state) {
            state.authToken = null;
        }
    }
};