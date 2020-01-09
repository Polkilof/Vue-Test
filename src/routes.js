import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Contact from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import E404 from './components/E404';

import {store} from './store';

const routes = [
	{
		path: '',
		redirect: {name: 'contact'}
	},
	{
		name: 'contact',
		path: '/contact',
		component: Contact,
	},
	{
		path: '/contact/:id',
		component: ContactDetail,
		beforeRouteEnter: (from, to, next) => {
			store.dispatch('contacts/loadContacts').then(data => {
				console.log('contact:id', data);
			});
			next();
		}
	},
	{
		name: 'e404',
		path: '*',
		component: E404
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});