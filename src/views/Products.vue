<template>
	<div class="row">
		<aside class="col-md-4 order-md-2 mb-4">
			Sidebar
		</aside>
		<main class="col-md-8 order-md-1">
			<div class="row gy-2">
				<div v-for="product in products" :key="product.id" class="col-lg-4 col-md-6 gx-2">
					<card :product="product" @add-to-cart="addToCart" class="card"></card>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	import axios from 'axios';
	import Card from '@/components/Card.vue';

	export default {
		components: {
			Card
		},
		data() {
			return {
				products: []
			};
		},
		methods: {
			async fetchProducts() {
				try {
					const response = await axios.get('https://fakestoreapi.com/products');
					this.products = response.data;
				} catch (error) {
					console.error(error);
				}
			},
			addToCart(product) {
				//TODO: add to store
			},
		},
		mounted() {
			this.fetchProducts();
		}
	}
</script>