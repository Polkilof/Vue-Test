import Vue from 'vue';
import App from './App.vue';

import {router} from './routes.js';
import {store} from './store';

import VueResource from 'vue-resource';

Vue.use(VueResource);
const jsonObject = 'https://api.myjson.com/bins/681tt'
Vue.http.options.root = 'https://api.myjson.com/bins/'

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
