<template>
	<div class="card h-100">
		<img :src="product.image" :alt="product.title" class="card-img-top product-img"/>
		<div class="card-body">
			<h5 class="card-title">{{ product.title }}</h5>
			<p class="card-text">Category: {{ product.category }}</p>
			<p class="card-text">Price: {{ product.price }}€</p>
			<button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			product: {
				type: Object,
				required: true
			}
		},
		methods: {
			addToCart(product) {
				this.$emit('add-to-cart', product);
			}
		}
	};
</script>

<style scoped>
	.product-img {
		display: block;
		width: 200px;
		height: 200px;
		object-fit: contain;
		margin: 16px auto 0;
	}
</style>
