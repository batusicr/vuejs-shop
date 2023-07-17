import { createRouter, createWebHistory } from 'vue-router';
import Products from 'src/views/Products.vue';
import Checkout from 'src/views/Checkout.vue';

const routes = [
	{
		path: '/',
		name: 'products',
		component: Products,
	},
	{
		path: '/checkout',
		name: 'checkout',
		component: Checkout,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;