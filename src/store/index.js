import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import contacts from './modules/contacts';

export const store = new Vuex.Store({
	modules: {
		contacts
	},
	state: {
		cnt: 1,
		
		name: '',
		email: null,
		phone: null,
		role: '',
		age: null,
		joiningDate: null,
		salery: null,
		image: null,

		address: '',
		location: '',
		mess: '',
		tags: [],
	},
	getters: {
		cnt(state){
			return state.cnt;
		},
		name(state){
			return state.name;
		},
		email(state){
			return state.email;
		},
		phone(state){
			return state.phone;
		},
		role(state){
			return state.role;
		},
		age(state){
			return state.age;
		},
		joiningDate(state){
			return state.joiningDate;
		},
		salery(state){
			return state.salery;
		},
		image(state){
			return state.image;
		},
		address(state){
			return state.address;
		},
		location(state){
			return state.location;
		},
		mess(state){
			return state.mess;
		},
		tags(state){
			return state.tags;
		},
	},
	mutations: {
		setName(state, value){
			state.name = value;
		},
		setEmail(state, value){
			state.email = value;
		},
		setPhone(state, value){
			state.phone = value;
		},
		setRole(state, value){
			state.role = value;
		},
		setAge(state, value){
			state.age = value;
		},
		setJoiningDate(state, value){
			state.joiningDate = value;
		},
		setSalery(state, value){
			state.salery = value;
		},
		setImage(state, value){
			state.image = value;
		},
		setAddress(state, value){
			state.address = value;
		},
		setLocation(state, value){
			state.location = value;
		},
		setMess(state, value){
			state.mess = value;
		},
		setTags(state, value){
			state.tags = value;
		},
	},
	actions: {},

	strict: process.env.NODE_ENV !== 'production'
});