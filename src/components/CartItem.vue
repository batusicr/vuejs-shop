<template>
	<div class="row">
		<div class="col-lg-2 col-md-12 mb-4 mb-lg-0 d-flex align-items-center">
			<img :src="product.image" :alt="product.title" class="product-img"/>
		</div>
		<div class="col-lg-7 col-md-8">
			<h5 class="mb-2"><strong>{{ product.title }}</strong></h5>
			<p class="text-muted fw-light mb-2">Category: {{ product.category }}</p>
			<p class="text-muted fw-light mb-4">Price: {{ product.price }}€</p>
		</div>
		<div class="col-lg-2 col-md-4 mb-2">
			<p class="text-muted fw-light mb-1 fs-7">Quantity</p>
			<input
				type="number"
				:value="product.quantity"
				@input="updateQuantity($event.target.value)"
				class="form-control"
			/>
		</div>
		<div class="col-lg-1 col-md-12 p-lg-0 d-flex align-items-center justify-content-end">
			<button type="button" class="remove-button" @click="removeFromCart">
				<img src="@/assets/trash.svg" alt="Remove" />
			</button>
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
			updateQuantity(quantity) {
				quantity = Number(quantity);

				if (!isFinite(quantity) || quantity < 1) {
					quantity = 1;
				}

				this.$emit('update-quantity', {
					product: this.product,
					quantity: quantity,
				});
			},
			removeFromCart() {
				this.$emit('remove-from-cart', this.product);
			}
		}
	};
</script>

<style scoped>
	.remove-button {
		line-height: 0;
		padding: 10px;
		outline: 0;
		border: none;
		background-color: transparent;
	}

	.remove-button > img {
		width: 20px;
		height: 20px;
	}

	.product-img {
		display: block;
		width: 100px;
		height: 100px;
		object-fit: contain;
		margin: 0 auto;
	}
</style>
