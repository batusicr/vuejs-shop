<template>
	<div class="row">
		<aside class="col-md-4 order-md-2 mb-4">
			Sidebar
		</aside>
		<main class="col-md-8 order-md-1">
			<div class="row gy-2">
				<div v-for="product in pageProducts" :key="product.id" class="col-lg-4 col-md-6 gx-2">
					<card :product="product" @add-to-cart="addToCart" class="card"></card>
				</div>
			</div>
			<pagination
				:current-page="currentPage"
				:total-pages="totalPages"
				@page-changed="changePage">
			</pagination>
		</main>
	</div>
</template>

<script>
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
				pageSize: 9
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
			changePage(page) {
				this.currentPage = page;
			}
		},
		mounted() {
			this.fetchProducts();
		}
	};
</script>