<template>
	<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
		<div v-for="product in pageProducts" :key="product.id" class="col mb-5">
			<card :product="product" @add-to-cart="addToCart"></card>
		</div>
	</div>
	<div v-if="totalPages > 1" class="d-flex justify-content-center">
		<pagination
			:current-page="currentPage"
			:total-pages="totalPages"
			@page-changed="changePage">
		</pagination>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import axios from 'axios';
	import Card from '@/components/Card.vue';
	import Pagination from '@/components/Pagination.vue';

	export default {
		components: {
			Card,
			Pagination
		},
		data() {
			return {
				products: [],
				currentPage: 1,
				pageSize: 8
			};
		},
		computed: {
			pageProducts() {
				const startIndex = (this.currentPage - 1) * this.pageSize;
				const endIndex = startIndex + this.pageSize;

				return this.products.slice(startIndex, endIndex);
			},
			totalPages() {
				return Math.ceil(this.products.length / this.pageSize);
			}
		},
		methods: {
			...mapActions('cart', ['addToCart']),
			async fetchProducts() {
				try {
					const response = await axios.get('https://fakestoreapi.com/products');
					this.products = response.data;
				} catch (error) {
					console.error(error);
				}
			},
			changePage(page) {
				this.currentPage = page;
			}
		},
		mounted() {
			this.fetchProducts();
		}
	};
</script>