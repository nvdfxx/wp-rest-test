<template>
	<div class="addpost">
        <div class="posttitle">
            <input type="text" v-model="postTitle" placeholder="Post title">
        </div>
        <div class="postbody">
            <textarea v-model="postBody" placeholder="Post body"></textarea>
        </div>
        <button @click="addPost()">
            Post request
        </button>
        <div class="resp">
            {{response.data}}
        </div>
    </div>
</template>

<script>

	import axios from 'axios'
	
	export default {
		data() {
			return {
				postTitle: '',
				postBody: '',
				response: []
			}
		},

		methods: {
			addPost() {
	            axios.post('https://jsonplaceholder.typicode.com/posts', {title: this.postTitle, body: this.postBody})
	            .then(response => (this.response = response))
	            .catch(error => console.log(error))
	        }
		}
	}

</script>

<style>
	.postbody {
		margin-top: 10px;
	}
</style>