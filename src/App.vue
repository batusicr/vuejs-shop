<template>
	<nav class=" navbar navbar-expand-lg navbar-light bg-light">
		<div class="container px-4 px-lg-5">
			<router-link to="/" v-slot="{href, navigate}" custom>
				<NavLink class="logo" :href="href" @click="navigate">
					<img src="@/assets/logo.svg" alt="VueJS Shop"/>
					<span class="navbar-brand">Home</span>
				</NavLink>
			</router-link>

			<router-link to="/checkout" v-slot="{href, navigate}" custom>
				<NavLink class="cart" :href="href" @click="navigate">
					<img src="@/assets/cart.svg" alt="Cart"/>
					<span>Cart <small class="badge bg-dark text-white ms-1 rounded-pill">{{ cartProducts.length }}</small></span>
				</NavLink>
			</router-link>
		</div>
	</nav>
	<section class="py-4">
		<div class="container">
			<router-view></router-view>
		</div>
	</section>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		computed: {
			...mapState(['cartProducts'])
		}
	};
</script>

<style scoped>
	.logo {
		display: inline-flex;
		flex-wrap: nowrap;
		align-items: center;
		cursor: pointer;
		gap: 10px;
	}

	.logo > img {
		width: 36px;
		height: 36px;
	}

	.cart {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		cursor: pointer;
		gap: 5px;
	}

	.cart > img {
		width: 25px;
		height: 25px;
	}

	.logo > span,
	.cart {
		line-height: 32px;
		padding: 0;
		border-bottom: 3px solid transparent;
		transition: border-bottom-color 150ms;
	}

	.logo:hover > span,
	.cart:hover {
		border-color: #41B883;
	}
</style>