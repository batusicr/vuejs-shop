<template>
	<div class="row d-flex justify-content-center my-4">
		<div class="col-md-8">
			<div class="card mb-4">
				<div class="card-header py-3">
					<h5 class="mb-0">Your cart</h5>
				</div>
				<div class="card-body">
					<div v-if="cartProducts.length === 0" class="row justify-content-center">No products</div>
					<cart-item
						v-else
						v-for="product in cartProducts"
						:key="product.id"
						:product="product"
						@update-quantity="updateQuantity"
						@remove-from-cart="removeFromCart"
						class="py-2 cart-item"
					/>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card mb-4">
				<div class="card-header py-3">
					<h5 class="mb-0">Summary</h5>
				</div>
				<div class="card-body">
					<div class="d-flex justify-content-between align-items-center mb-3">
						<strong class="m-0 p-0">Total amount</strong>
						<p class="m-0 p-0">{{ totalPrice }}€</p>
					</div>
					<button type="button" class="btn btn-primary btn-block px-4">Checkout</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import CartItem from '@/components/CartItem.vue';

	export default {
		components: {
			CartItem
		},
		computed: {
			...mapState(['cartProducts']),
			totalPrice() {
				const total = this.cartProducts.reduce((sum, product) => {
					return (sum + product.price * product.quantity);
				}, 0);

				return Number(total).toFixed(2);
			}
		},
		methods: {
			...mapMutations(['removeFromCart', 'updateQuantity'])
		}
	};
</script>

<style scoped>
	.cart-item:not(:first-child) {
		border-top: 1px solid #eee;
	}
</style>