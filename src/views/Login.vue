<template>
	<main class="login-form">
		<form @submit.prevent="performLogin">
			<div class="form-floating">
				<input type="text" id="username" placeholder="Username" v-model="username" class="form-control">
				<label for="username">Username</label>
			</div>
			<div class="form-floating mb-4">
				<input type="password" id="password" placeholder="Password" v-model="password" class="form-control">
				<label for="password">Password</label>
			</div>
			<button type="submit" class="w-100 btn btn-lg btn-primary">Login</button>
		</form>
	</main>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		data() {
			return {
				username: null,
				password: null
			}
		},
		methods: {
			...mapActions('auth', ['login']),
			async performLogin() {
				try {
					await this.login({
						username: this.username,
						password: this.password
					});

					this.$router.replace('/');
				} catch (error) {
					console.log(error.message || 'Authentication failed');
				}
			}
		}
	};
</script>

<style scoped>
	.login-form {
		width: 100%;
		max-width: 330px;
		text-align: center;
		margin: 1rem auto 0;
		padding: 2rem;
		background-color: #fff;
		border: 1px solid #dee2e6;
	}

	.form-control {
		margin-bottom: 10px;
	}

</style>