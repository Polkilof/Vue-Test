<template>
	<div class="error-box">
		<div class="error-body text-center">
			<h1 class="text-danger">404 {{cnt}}</h1>
			<h3 class="text-uppercase">Page Not Found !</h3>
			<p class="text-muted m-t-30 m-b-30">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
			<router-link :to="{name: 'contact'}" class="btn btn-danger btn-rounded waves-effect waves-light m-b-40">Back to home</router-link>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	const jsonObject = 'https://api.myjson.com/bins/twsm8'
	
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters([
				'cnt'
			])
		}
	}
</script>