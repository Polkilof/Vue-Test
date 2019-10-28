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
		beforeEnter: (from, to, next) => {
			store.dispatch('contacts/loadContacts').then(data => {
				console.log('contact:id', data);
			});
			next();
		}
	},
	{
		path: '/contact/:id',
		component: ContactDetail,
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