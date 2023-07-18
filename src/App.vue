<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
		<div class="container px-4 px-lg-5">
			<router-link to="/" v-slot="{href, navigate}" custom>
				<a class="logo" :href="href" @click="navigate">
					<img src="@/assets/logo.svg" alt="VueJS Shop"/>
					<span class="navbar-brand">Home</span>
				</a>
			</router-link>
			<div v-if="isAuth">
				<router-link to="/checkout" v-slot="{href, navigate}" custom>
					<a class="cart" :href="href" @click="navigate">
						<img src="@/assets/cart.svg" alt="Cart"/>
						<span>Cart <small class="badge bg-dark text-white ms-1 rounded-pill">{{ cartProducts.length }}</small></span>
					</a>
				</router-link>
				<button @click="performLogout" class="logout">
					<img src="@/assets/exit.svg" alt="Logout"/>
					<span>Logout</span>
				</button>
			</div>
		</div>
	</nav>
	<section class="py-4">
		<div class="container">
			<router-view></router-view>
		</div>
	</section>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		computed: {
			...mapGetters('auth', ['isAuth']),
			...mapGetters('cart', ['cartProducts'])
		},
		methods: {
			...mapActions('auth', ['logout']),
			performLogout() {
				this.logout();
				this.$router.replace('/login');
			}
		}
	};
</script>

<style scoped>
	.logo {
		display: inline-flex;
		flex-wrap: nowrap;
		align-items: center;
		text-decoration: none;
		color: #000;
		cursor: pointer;
		gap: 10px;
	}

	.logo > img {
		width: 36px;
		height: 36px;
	}

	.logout {
		background-color: transparent;
		border: none;
		outline: 0;
		margin-left: 2rem;
	}

	.logout,
	.cart {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		text-decoration: none;
		color: #000;
		cursor: pointer;
		gap: 5px;
	}

	.logout > img,
	.cart > img {
		width: 25px;
		height: 25px;
	}

	.logo > span,
	.logout,
	.cart {
		line-height: 32px;
		padding: 0;
		border-bottom: 3px solid transparent;
		transition: border-bottom-color 150ms;
	}

	.logo:hover > span,
	.logout:hover,
	.cart:hover {
		border-color: #41B883;
	}
</style>