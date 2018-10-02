<template>
	<div>
		<h1>{{$route.params.id}}</h1>
		<div class="body">
			{{$route.params}}
		</div>
	</div>
</template>

<script>
	
	export default {
		props: []
	}

</script>