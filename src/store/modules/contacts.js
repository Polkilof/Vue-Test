import Vue from 'vue';

export default {
	namespaced: true,
	state: {
		contacts: [
			{
		      "id": 0,
		      "image": "images/users/genu.jpg",
		      "name": "Genelia Deshmukh",
		      "email": "genelia@gmail.com",
		      "phone": "+123 456 789",
		      "role": "Designer",
		      "age": "23",
		      "joiningDate": "12-10-2014",
		      "salery": "$1200",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 1,
		      "image": "images/users/genu.jpg",
		      "name": "Genelia Deshmukh",
		      "email": "genelia@gmail.com",
		      "phone": "+123 456 789",
		      "role": "Designer",
		      "age": "23",
		      "joiningDate": "12-10-2014",
		      "salery": "$1200",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 2,
		      "image": "images/users/arijit.jpg",
		      "name": "Arijit Singh",
		      "email": "arijit@gmail.com",
		      "phone": "+234 456 789",
		      "role": "Developer",
		      "age": "26",
		      "joiningDate": "10-09-2014",
		      "salery": "$1800",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 3,
		      "image": "images/users/govinda.jpg",
		      "name": "Govinda jalan",
		      "email": "govinda@gmail.com",
		      "phone": "+345 456 789",
		      "role": "Accountant",
		      "age": "28",
		      "joiningDate": "1-10-2013",
		      "salery": "$2200",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 4,
		      "image": "images/users/hritik.jpg",
		      "name": "Hritik Roshan",
		      "email": "hritik@gmail.com",
		      "phone": "+456 456 789",
		      "role": "HR",
		      "age": "25",
		      "joiningDate": "2-10-2016",
		      "salery": "$200",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 5,
		      "image": "images/users/john.jpg",
		      "name": "John Abraham",
		      "email": "john@gmail.com",
		      "phone": "+567 456 789",
		      "role": "Manager",
		      "age": "23",
		      "joiningDate": "10-9-2015",
		      "salery": "$1200",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 6,
		      "image": "images/users/pawandeep.jpg",
		      "name": "Pawandeep kumar",
		      "email": "pawandeep@gmail.com",
		      "phone": "+678 456 789",
		      "role": "Chairman",
		      "age": "29",
		      "joiningDate": "10-5-2013",
		      "salery": "$1500",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 7,
		      "image": "images/users/ritesh.jpg",
		      "name": "Ritesh Deshmukh",
		      "email": "ritesh@gmail.com",
		      "phone": "+123 456 789",
		      "role": "Designer",
		      "age": "35",
		      "joiningDate": "05-10-2012",
		      "salery": "$3200",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 8,
		      "image": "images/users/salman.jpg",
		      "name": "Salman Khan",
		      "email": "salman@gmail.com",
		      "phone": "+234 456 789",
		      "role": "Developer",
		      "age": "27",
		      "joiningDate": "11-10-2014",
		      "salery": "$1800",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 9,
		      "image": "images/users/govinda.jpg",
		      "name": "Govinda jalan",
		      "email": "govinda@gmail.com",
		      "phone": "+345 456 789",
		      "role": "Accountant",
		      "age": "18",
		      "joiningDate": "12-5-2016",
		      "salery": "$100",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 10,
		      "image": "images/users/sonu.jpg",
		      "name": "Sonu Nigam",
		      "email": "sonu@gmail.com",
		      "phone": "+456 456 789",
		      "role": "HR",
		      "age": "36",
		      "joiningDate": "18-5-2009",
		      "salery": "$4200",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 11,
		      "image": "images/users/varun.jpg",
		      "name": "Varun Dhawan",
		      "email": "varun@gmail.com",
		      "phone": "+567 456 789",
		      "role": "Manager",
		      "age": "43",
		      "joiningDate": "12-10-2010",
		      "salery": "$5200",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 12,
		      "image": "images/users/genu.jpg",
		      "name": "Genelia Deshmukh",
		      "email": "genelia@gmail.com",
		      "phone": "+123 456 789",
		      "role": "Designer",
		      "age": "23",
		      "joiningDate": "12-10-2014",
		      "salery": "$1200",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 13,
		      "image": "images/users/arijit.jpg",
		      "name": "Arijit Singh",
		      "email": "arijit@gmail.com",
		      "phone": "+234 456 789",
		      "role": "Developer",
		      "age": "26",
		      "joiningDate": "10-09-2014",
		      "salery": "$1800",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 14,
		      "image": "images/users/govinda.jpg",
		      "name": "Govinda jalan",
		      "email": "govinda@gmail.com",
		      "phone": "+345 456 789",
		      "role": "Accountant",
		      "age": "28",
		      "joiningDate": "1-10-2013",
		      "salery": "$2200",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","Wordpress","jQuery","CSS","Photoshop","Illustrator"]
		    },
		    {
		      "id": 15,
		      "image": "images/users/7.jpg",
		      "name": "Alex Kupriyanov",
		      "email": "alex.kupriyanov@maincode.agency",
		      "phone": "+38099 41 76 427",
		      "role": "Developer",
		      "age": "27",
		      "joiningDate": "1-10-2013",
		      "salery": "$10000",
		      "address": "",
		      "location": "",
		      "mess": "",
		      "tags": ["HTML","CSS","jQuery","JS","Vue","Photoshop","Illustrator"]
		    }
		],
		filteredItems: []
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
			/*store.commit('clearContacts');
			Vue.http.get('https://api.myjson.com/bins/twsm8')
					.then(response => response.json())
					.then(data => {
						store.commit('loadContacts', data);
					})
					.catch(err => {
						console.log(err);
					});*/
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