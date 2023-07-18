import { createRouter, createWebHistory } from 'vue-router';
import Products from '@/views/Products.vue';
import Checkout from '@/views/Checkout.vue';
import Login from '@/views/Login.vue';
import store from '@/store';

const routes = [
	{
		path: '/',
		name: 'products',
		component: Products,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/checkout',
		name: 'checkout',
		component: Checkout,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
	const isAuthenticated = store.getters['auth/isAuth'];

	if (!isAuthenticated && requiresAuth) {
		next({ name: 'login' });
	} else if (isAuthenticated && to.name === 'login') {
		next({ name: 'products' });
	} else {
		next();
	}
});

export default router;