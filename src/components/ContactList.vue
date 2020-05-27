<template>
	<div class="row">
		<div class="col-md-12">
			<div class="white-box p-0">
				<div class="page-aside">
					<div class="page-header">
						<div class="pull-right">
							<input v-model="searchString" v-on:keyup="onSearch(searchString)"
									type="text" id="demo-input-search2" placeholder="search contacts" class="form-control">
							<span class="help is-dark"><strong>{{paginatedItemsFilter.length}}</strong> of {{contacts.length}} person found</span>
						</div>
						<h3>Contact / Employee List </h3>
					</div>

					<div class="table-responsive">
						<table id="demo-foo-addrow" class="table m-t-30 table-hover contact-list" data-page-size="10">
							<thead>
								<tr>
									<th>No</th>
									<th>Name</th>
									<th>Email</th>
									<th>Phone</th>
									<th>Role</th>
									<th>Age</th>
									<th>Joining date</th>
									<th>Salery</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(contact, index) in paginatedItems" :key="contact.id">
									<td>{{ contact.id+1 }}</td>
									<td>
										<router-link :to="'/contact/' + contact.id"><img :src="contact.image" alt="user" class="img-circle" /> {{ contact.name }}</router-link>
									</td>
									<td>{{ contact.email }}</td>
									<td>
										<template class="text-change-block">
											<transition-group name="translate-fade" mode="out-in" 
																enter-active-class="animated tada"
																leave-active-class="animated bounceOutRight">
												<div v-if="status[index].changePhone"
													 key="textPhone"
													 @click="toggleTooltipPhone(index)"
													 class="form-inline-text">
													{{ contact.phone }}
													{{ status.changePhone }}
												</div>
												<div v-else
													 key="formPhone"
													 class="form-inline">
													<input type="text" class="form-control" v-model="contact.phone">
													<button @click="toggleTooltipPhone(index)" 
															type="button" class="btn btn-info waves-effect">Save</button>
												</div>
											</transition-group>
										</template>
									</td>
									<td><span class="label" :class="'label-' + contact.role.toLowerCase()">{{ contact.role }}</span> </td>
									<td>{{ contact.age }}</td>
									<td>{{ contact.joiningDate }}</td>
									<td>
										<div class="text-change-block">
											<transition-group name="translate-fade" mode="out-in">
												<div v-if="status[index].changeSalery"
													 key="textSalery"
													 @click="status[index].changeSalery = !status[index].changeSalery"
													 class="form-inline-text">
													{{ contact.salery }}
												</div>
												<div v-else
													 key="formSalery"
													 class="form-inline">
													<input type="text" class="form-control" v-model="contact.salery">
													<button @click="toggleTooltipSalery(index)" 
															type="button" class="btn btn-info waves-effect">Save</button>
												</div>
											</transition-group>
										</div>
									</td>
									<td>
										<button @click="deleteContact(contact)"
												type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button>
									</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colspan="2">
										<button @click="showModal = true"
												type="button" class="btn btn-info btn-rounded" data-toggle="modal" data-target="#add-contact">Add New Contact</button>
									</td>
									<td colspan="7">
										<template>
											<div class="text-right">
												<ul v-show="this.filteredItems.length > this.pagination.itemPerPage" class="pagination pagination-split">
													<li :class="{'disabled': this.pagination.currentPage==this.pagination.items[0] || this.pagination.items.length==0}">
														<a href="#" @click.prevent="selectPage(pagination.items[0])">First</a>
													</li>
													<li :class="{'disabled': this.pagination.currentPage==this.pagination.items[0] || this.pagination.items.length==0}">
														<a href="#" @click.prevent="selectPage(pagination.currentPage-1)"><i class="fa fa-angle-left"></i></a>
													</li>

													<li v-for="(item, index) in pagination.filteredItems" :key="index" :class="{'active': item == pagination.currentPage}">
														<a href="#" @click.prevent="selectPage(item)">{{ item }}</a>
													</li>

													<li :class="{'disabled': this.pagination.currentPage==this.pagination.items[this.pagination.items.length-1] || this.pagination.items.length==0}">
														<a href="#" @click.prevent="selectPage(pagination.currentPage+1)"><i class="fa fa-angle-right"></i></a>
													</li>
													<li :class="{'disabled': this.pagination.currentPage==this.pagination.items[this.pagination.items.length-1] || this.pagination.items.length==0}">
														<a href="#" @click.prevent="selectPage(pagination.items[pagination.items.length-1])">Last</a>
													</li>
												</ul>
											</div>
										</template>
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
					<keep-alive>
						<div v-if="showModal"
							id="add-contact" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<button @click="close"
												type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
										<h4 class="modal-title" id="myModalLabel">Add New Contact</h4>
									</div>
									<div class="modal-body">
										<form class="form-horizontal form-material">
											<div class="form-group">
												<div class="col-md-12 m-b-20">
													<input type="text" class="form-control" placeholder="Name" v-model="name">
												</div>
												<div class="col-md-12 m-b-20">
													<input type="text" class="form-control" placeholder="Email" v-model="email">
												</div>
												<div class="col-md-12 m-b-20">
													<input type="text" class="form-control" placeholder="Phone" v-model="phone">
												</div>
												<div class="col-md-12 m-b-20">
													<input type="text" class="form-control" placeholder="Designation" v-model="role">
												</div>
												<div class="col-md-12 m-b-20">
													<input type="text" class="form-control" placeholder="Age" v-model="age">
												</div>
												<div class="col-md-12 m-b-20">
													<input type="text" class="form-control" placeholder="Date of joining" v-model="joiningDate">
												</div>
												<div class="col-md-12 m-b-20">
													<input type="text" class="form-control" placeholder="salery" v-model="salery">
												</div>
												
												<div class="col-md-12 m-b-20">
													<div class="fileupload btn btn-danger btn-rounded waves-effect waves-light"><span><i class="ion-upload m-r-5"></i>Upload Contact Image</span>
														<input type="file" class="upload" @change="onFileChange">
													</div>
												</div>
											</div>
										</form>
									</div>
									<div class="modal-footer">
										<button @click.prevent="addContactItem"
												type="button" class="btn btn-info waves-effect" data-dismiss="modal">Save</button>
										<button @click="close"
												type="button" class="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
									</div>
								</div>
							</div>
						</div>
					</keep-alive>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	const jsonObject = 'https://api.myjson.com/bins/twsm8'

	import {mapGetters, mapActions} from 'vuex';

	export default {
		data(){
			return {
				searchString: '',
				showTooltip: false,
				showModal: false,

				paginatedItems: [],
				pagination: {
					range: 5,
					currentPage: 1,
					itemPerPage: 8,
					items: [],
					filteredItems: [],
				},
			}
		},
		created(){
			/*this.$store.dispatch('contacts/loadContacts');*/
			this.filteredItems = this.contacts.map(item => {
				return{
					...item,
					changePhone: item.phone !== -1,
					changeSalery: item.salery !== -1,
				}
			})
		},
		methods: {
			onSearch(){
				this.buildPagination();
				if( this.paginatedItems.length-1 < 1 ){
					this.selectPage(this.pagination.items.length);
				} else {
					this.selectPage(this.pagination.currentPage);
				}
				
			},
			buildPagination(){
				let numberOfPage = Math.ceil(this.paginatedItemsFilter.length/this.pagination.itemPerPage);
				this.pagination.items = [];
				for( let i = 0; i < numberOfPage; i++ ){
					this.pagination.items.push(i+1);
				}
			},
			selectPage(item){
				this.pagination.currentPage = item;
				
				let start = 0;
				let end = 0;
				if( this.pagination.currentPage < this.pagination.range-2 ){
					start = 1;
					end = start+this.pagination.range-1;
				} else if( this.pagination.currentPage <= this.pagination.items.length && this.pagination.currentPage > this.pagination.items.length - this.pagination.range + 2 ){
					start = this.pagination.items.length-this.pagination.range+1;
					end = this.pagination.items.length;
				} else{
					start = this.pagination.currentPage-2;
					end = this.pagination.currentPage+2;
				}
				if( start < 1 ){
					start = 1;
				}
				if( end > this.pagination.items.length ){
					end = this.pagination.items.length;
				}

				this.pagination.filteredItems = [];
				for( let i = start; i <= end; i++ ){
					this.pagination.filteredItems.push(i);
				}
				
				this.paginatedItems = this.paginatedItemsFilter.filter((v, k) => {
					return Math.ceil((k+1) / this.pagination.itemPerPage) == this.pagination.currentPage
				});
			},

			addContactItem(){
				this.$store.commit('contacts/addContact', {
					'id': this.contacts.length,
					'name': this.name,
					'email': this.email,
					'phone': this.phone,
					'role': this.role,
					'age': this.age,
					'joiningDate': this.joiningDate,
					'salery': this.salery,
					'image': this.image,
					'address': this.address,
					'mess': this.mess,
					'location': this.location,
					'tags': this.tags,
				});
				//this.contacts.push(item => item);
				/*this.contacts.push({
					'id': this.contacts.length,
					'name': this.name,
					'email': this.email,
					'phone': this.phone,
					'role': this.role,
					'age': this.age,
					'joiningDate': this.joiningDate,
					'salery': this.salery,
					'image': this.image
				});*/
				/*this.status.push({
					changePhone: this.phone !== -1,
					changeSalery: this.salery !== -1
				});*/
				this.showModal = false;
				/*this.filteredItems = this.contacts;
				this.$store.commit('contacts/changeContacts');*/
				//this.$store.dispatch('contacts/changeContacts');
				this.changeSave();
				this.filteredItems = this.contacts;
				this.buildPagination();
				this.selectPage(this.pagination.items.length);
			},

			onFileChange(e){
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length)
					return;
				this.createImage(files[0]);
			},
			createImage(file){
				let image = new Image();
				let reader = new FileReader();
				let vm = this;

				reader.onload = (e) => {
					vm.image = e.target.result;
				};
				reader.readAsDataURL(file);
			},
			addContact(){
				this.showModal = true;
			},
			close(){
				this.showModal = false;
				this.name = null;
				this.email = null;
				this.phone = null;
				this.role = '';
				this.age = null;
				this.joiningDate = null;
				this.salery = null;
				this.image = null;
			},
			changeSave(){
				/*Vue.http.post('https://api.myjson.com/bins', {
					contacts: this.contacts,
				}).then(function(data){
					console.log(data);
					console.log(data.body.uri);
					jsonObject = data.body.uri;
					console.log(jsonObject);
				})
				.catch(err => {
					console.log(err);
				});*/
				Vue.http.put(''+ jsonObject +'', {
					contacts: this.contacts,
				}).then(function(data){
					console.log(data);
				})
				.catch(err => {
					console.log(err);
				});
			},
			deleteContact(contact){
				this.$store.commit('contacts/deleteContact');
				//this.contacts.splice(this.contacts.indexOf(contact), 1);
				//this.filteredItems = this.contacts;
				this.buildPagination();
				if( this.paginatedItems.length-1 < 1 ){
					this.selectPage(this.pagination.currentPage-1);
				} else {
					this.selectPage(this.pagination.currentPage);
				}
				this.changeSave();
			},
			toggleTooltipPhone(index){
				this.status[index].changePhone = !this.status[index].changePhone;
				this.changeSave();
			},
			toggleTooltipSalery(index){
				this.status[index].changeSalery = !this.status[index].changeSalery;
				this.changeSave();
			},

		},
		watch: {
			paginatedItemsFilter: function (val, old) {
				this.buildPagination();
				this.selectPage(this.pagination.currentPage);
			},
			deep: true
		},
		computed: {
			paginatedItemsFilter() {
				return this.filteredItems.filter((item) => {
					if( item.name.toLowerCase().match(this.searchString.toLowerCase()) || 
						item.email.toLowerCase().match(this.searchString.toLowerCase()) || 
						item.phone.toLowerCase().match(this.searchString.toLowerCase()) || 
						item.age.toLowerCase().match(this.searchString.toLowerCase()) || 
						item.role.toLowerCase().match(this.searchString.toLowerCase()) || 
						item.joiningDate.toLowerCase().match(this.searchString.toLowerCase()) || 
						item.salery.toLowerCase().match(this.searchString.toLowerCase())){
						return item;
					}
				});
			},
			...mapGetters('filteredItems', {
				filteredItems: 'filteredItems'
			}),
			...mapGetters('contacts', {
				contacts: 'contacts'
			}),
			...mapGetters([
				'name', 'email', 'phone', 'role', 'age', 'joiningDate', 'salery', 'image', 'address', 'location', 'mess', 'tags'
			]),

			status() {
				return this.filteredItems = this.contacts.map(item => {
					return{
						...item,
						changePhone: item.phone !== -1,
						changeSalery: item.salery !== -1,
					}
				})
			},
			changeSaves: {
				get(){
					return [...this.status];
				},
				set(value){
					this.$store.commit('contacts/changeContacts', {contacts: value});
				}
			},
			filteredItems: {
				get(){
					return [...this.status];
				},
				set(value){
					this.$store.commit('contacts/loadContacts', {contacts: value});
				}
			},
			name: {
				get(){
					return this.$store.getters.name;
				},
				set(value){
					this.$store.commit('setName', value);
				}
			},
			email: {
				get(){
					return this.$store.getters.email;
				},
				set(value){
					this.$store.commit('setEmail', value);
				}
			},
			phone: {
				get(){
					return this.$store.getters.phone;
				},
				set(value){
					this.$store.commit('setPhone', value);
				}
			},
			role: {
				get(){
					return this.$store.getters.role;
				},
				set(value){
					this.$store.commit('setRole', value);
				}
			},
			age: {
				get(){
					return this.$store.getters.age;
				},
				set(value){
					this.$store.commit('setAge', value);
				}
			},
			joiningDate: {
				get(){
					return this.$store.getters.joiningDate;
				},
				set(value){
					this.$store.commit('setJoiningDate', value);
				}
			},
			salery: {
				get(){
					return this.$store.getters.salery;
				},
				set(value){
					this.$store.commit('setSalery', value);
				}
			},
			image: {
				get(){
					return this.$store.getters.image;
				},
				set(value){
					this.$store.commit('setImage', value);
				}
			},
			address: {
				get(){
					return this.$store.getters.address;
				},
				set(value){
					this.$store.commit('setAddress', value);
				}
			},
			location: {
				get(){
					return this.$store.getters.location;
				},
				set(value){
					this.$store.commit('setLocation', value);
				}
			},
			mess: {
				get(){
					return this.$store.getters.mess;
				},
				set(value){
					this.$store.commit('setMess', value);
				}
			},
			tags: {
				get(){
					return this.$store.getters.tags;
				},
				set(value){
					this.$store.commit('setTags', value);
				}
			},
		},

	}
</script>

<style scoped>
	.page-header{
		overflow: hidden;
	}
	.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td{
		vertical-align: middle;
	}
	.contact-list tbody td a{
		display: inline-flex;
		align-items: center;
	}
	.contact-list tbody td img{
		margin-right: 5px;
	}
	.modal {
		display: block !important;
	}
	.label{
		background-color: #53e69d;
	}
	.label-designer {
		background-color: #ff7676;
	}
	.label-developer {
		background-color: #2cabe3;
	}
	.label-accountant {
		background-color: #53e69d;
	}
	.label-hr {
		background-color: #4c5667;
	}
	.label-manager {
		background-color: #ff7676;
	}
	.label-chairman {
		background-color: #ffc36d;
	}
	.pagination li.disabled > a{
		pointer-events: none;
		opacity: .8;
		-webkit-transition: all .2s;
		-o-transition: all .2s;
		transition: all .2s;
	}
	.text-change-block{
		position: relative;
		display: inline-flex;
		flex-flow: row nowrap;
		overflow: hidden;
		max-width: 233px;
		width: 100%;
	}
	.form-inline{
		position: relative;
		display: inline-flex;
	}
	.form-inline .form-control{
		height: 30px;
		border: 0;
	}
	.form-inline .btn{
		padding: 4px 10px;
	}
	.form-inline-text{
		position: relative;
		display: inline-flex;
		line-height: 30px;
	}
	.translate-fade-enter{}
	.translate-fade-enter-active{
		animation: slideIn 0.5s;
	}
	.translate-fade-enter-to{}
	.translate-fade-leave{
		position: absolute;
		opacity: 0;
	}
	.translate-fade-leave-active{
		animation: slideOut 0.5s;
	}
	.translate-fade-leave-to{
		position: absolute;
		opacity: 0;
	}
	@keyframes slideIn{
		from{transform: translateX(250px);}
		to{transform: translateX(0px);}
	}
	@keyframes slideOut{
		from{transform: translateX(0px);}
		to{transform: translateX(-250px);}
	}
</style>