<template>
	<div class="posts">
		<h1>Get Posts!</h1>
		<input type="number" min="0" v-model.number="postscount">
		<button @click="getPosts(postscount)">posts</button>
		<ul>
			<li :key="key" v-for="(post,key,index) in posts">
				<div class="post-id">Post ID: {{ post.id }}</div>
				<div class="post-title">Title: {{ post.title }}</div>
				
				<button class="delete" @click="delPost(index)">delete this post</button>
				<router-link class="read-it" :to="'/posts/post/' + post.id" >Read</router-link>
				
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				postscount: 0,
				msg: 'awdawd',
				posts: []
			}
		},

		methods: {
			getPosts: function(count) {
	            this.posts = [];
	            for(var i = 1; i <= count; i++) {
	                axios.get('https://jsonplaceholder.typicode.com/posts/' + i )
	                .then(response => (this.posts.push(response.data)))
	                .catch(error =>(console.log(error)))
	                console.log(this.posts)
	            }
	        },
	        delPost: function(index) {
	            this.posts.splice(index, 1)
	        }
		}
	}
</script>