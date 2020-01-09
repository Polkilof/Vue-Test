import Vue from 'vue';
import App from './App.vue';

import {router} from './routes.js';
import {store} from './store';

import VueResource from 'vue-resource';

import VueTags from "vue-tags";

Vue.component("input-tags", VueTags);
Vue.use(VueResource);
const jsonObject = 'https://api.myjson.com/bins/twsm8'
Vue.http.options.root = 'https://api.myjson.com/bins/'

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(vueTags)
}

new Vue({
	el: '#app',
	router,
	store,
	components: {
		VueTags
	},
	render: h => h(App)
})
