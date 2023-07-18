import { createStore } from 'vuex';
import authModule from './modules/auth';
import cartModule from './modules/cart';

const store = createStore({
    modules: {
        auth: authModule,
        cart: cartModule
    }
});

export default store;