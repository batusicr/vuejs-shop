<template>
	<div class="container">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<router-link to="/" v-slot="{href, navigate}" custom>
				<NavLink class="logo" :href="href" @click="navigate">
					<img src="@/assets/logo.svg" alt="VueJS Shop"/>
					<span class="navbar-brand">Home</span>
				</NavLink>
			</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

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

	.logo > span {
		border-bottom: 3px solid transparent;
		transition: border-bottom-color 150ms;
	}

	.logo:hover > span {
		border-color: #41B883;
	}
</style>