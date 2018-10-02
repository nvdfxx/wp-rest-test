<template>
	<div>
		<h1>Get All Names!</h1>
		<button @click="allNames()" >All names</button>
		<ul>
			<li v-for="name in names">
				{{ name }}
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				names: [],
			}
		},

		methods: {
			allNames: function() {
				axios
			      	.get('https://jsonplaceholder.typicode.com/users')
			      	.then(response => (this.info = response.data))
			      	.then(() => {
			      		this.names = [];
			            for (var i = 0; i < this.info.length; i++) {
			                this.names.push(this.info[i].name) 
			            }
			      	})
			      	.catch(error =>(console.log(error)));
			    
	            
	        }
		}
	}
</script>