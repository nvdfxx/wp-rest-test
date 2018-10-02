<template>
	<div>
		<h1>{{$route.params.id}}</h1>
		<div class="post">
			<div class="title">
				<p>Post title:</p> 
				{{post.title}}
			</div>
			<div class="body">
				<p>Post body:</p>
				{{post.body}}
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		props: [],
		data() {
			return {
				post: null
			}
		},
		created() {
			axios.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id )
	            .then(response => (this.post = response.data))
	            .catch(error =>(console.log(error)))
		}
	}

</script>

<style scoped>
	

	.post .body {
		padding: 30px;
		border: 1px solid #b537a4;
		margin-top: 30px;
	}
</style>