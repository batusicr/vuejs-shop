<template>
	<nav>
		<ul class="pagination">
			<li class="page-item" :class="{'disabled': currentPage === 1}">
				<a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
			</li>
			<li class="page-item" v-for="page in totalPages" :key="page" :class="{'active': currentPage === page}">
				<a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
			</li>
			<li class="page-item" :class="{'disabled': currentPage === totalPages}">
				<a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		props: {
			currentPage: {
				type: Number,
				required: true
			},
			totalPages: {
				type: Number,
				required: true
			}
		},
		methods: {
			changePage(page) {
				this.$emit('page-changed', page);
			}
		}
	};
</script>
