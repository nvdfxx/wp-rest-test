<template>
	<div class="photos">
		<h1>Get Photo!</h1>
		<div v-if="loading" class="onloading">Загрузка...</div>
		<input type="number" min="0" v-model.number="photocount">
		<button @click="getPhotos(photocount)">Photos</button>
		<div>
			<img :src="photos.url" alt="">
			<p>{{ photos.title }}</p>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default {
		data() {
			return {
				photocount: 0,
				loading: false,
				photos: []
			}
		},

		methods: {
			getPhotos: function(count) {
	            this.loading = true;
	            console.log(this.loading);
	            axios.get('https://jsonplaceholder.typicode.com/photos/' + count )
	                .then(response => (this.photos = response.data))
	                .then(response => {this.loading = false; console.log(this.loading)})
	                .catch(error =>(console.log(error)))
	                
	            console.log(this.loading)
        	}
		}
	}

</script>