import Vue from 'vue';

export default {
	namespaced: true,
	state: {
		contacts: [],
		filteredItems: {},
	},
	getters: {
		filteredItems: state => {
			return state.filteredItems;
		},
		contacts: state => {
			return state.contacts;
		},
		contactsMap(state){
			let contactsMap = {};

			for(let i = 0; i < state.contacts.length; i++){
				let contact = state.contacts[i];
				contactsMap[contact.id] = contact;
			}
			return contactsMap;
		},
		contact: (state, getters) => (id) => {
			return getters.contactsMap[id];
		}
	},
	mutations: {
		clearContacts(state){
			state.contacts = [];
		},
		loadContacts(state, data){
			state.contacts = [...data.contacts];
		},
		filteredContacts(state, data){
			state.filteredItems = [...data.filteredItems];
			console.log('filteredContacts', state.filteredItems);
		},
		addContact(state, contacts){
			console.log('addContacts', state.contacts);
			state.contacts.push(contacts);
		},
		deleteContact(state, contact){
			state.contacts.splice(state.contacts.indexOf(contact), 1);
		},
		changeContacts(state, data){
			console.log('changeContacts', state.contacts);
			state.contacts.push(contacts);
		},
		updateContactItem(state){},
	},
	actions: {
		loadContacts(store){
			store.commit('clearContacts');
			Vue.http.get('https://api.myjson.com/bins/twsm8')
					.then(response => response.json())
					.then(data => {
						store.commit('loadContacts', data);
					})
					.catch(err => {
						console.log(err);
					});
		},
		filteredContacts(store){
			Vue.http.get('https://api.myjson.com/bins/twsm8')
					.then(response => response.json())
					.then(data => {
						store.commit('filteredContacts', data);
					})
					.catch(err => {
						console.log(err);
					});
		},
		changeContacts(store, state){
			Vue.http.put('https://api.myjson.com/bins/twsm8')
					.then(response => response.json())
					.then(data => {
						store.commit('changeContacts', data);
					})
					.catch(err => {
						console.log(err);
					});
		},
	},
};


/*function getContacts(){
	return [
		{
			"id": 0,
			"url": "contact-detail.html",
			"image": "/images/users/genu.jpg",
			"name": "Genelia Deshmukh",
			"email": "genelia@gmail.com",
			"phone": "+123 456 789",
			"role": "Designer",
			"age": "23",
			"joiningDate": "12-10-2014",
			"salery": "$1200"
		},
		{
			"id": 1,
			"url": "contact-detail.html",
			"image": "/images/users/genu.jpg",
			"name": "Genelia Deshmukh",
			"email": "genelia@gmail.com",
			"phone": "+123 456 789",
			"role": "Designer",
			"age": "23",
			"joiningDate": "12-10-2014",
			"salery": "$1200"
		},
		{
			"id": 2,
			"url": "contact-detail.html",
			"image": "/images/users/arijit.jpg",
			"name": "Arijit Singh",
			"email": "arijit@gmail.com",
			"phone": "+234 456 789",
			"role": "Developer",
			"age": "26",
			"joiningDate": "10-09-2014",
			"salery": "$1800"
		},
	]
}*/