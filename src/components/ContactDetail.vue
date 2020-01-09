<template>
	<div class="container-fluid">
		<div class="row bg-title">
			<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
				<h4 class="page-title">Contact Detail</h4>
			</div>
			<div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
				<ol class="breadcrumb">
					<li>
						<router-link :to="{name: 'contact'}">Contact</router-link>
					</li>
					<li class="active">Contact Detail</li>
				</ol>
			</div>
			<!-- /.col-lg-12 -->
		</div>
		<!-- row -->
		<div class="row">
			<div class="col-md-4 col-xs-12">
				<div class="white-box">
					<div class="user-bg">
						<img width="100%" alt="user" :src="imageIndexOf()">
					</div>
					<div class="user-btm-box">
						<!-- .row -->
						<div class="row text-center m-t-10">
							<div class="col-md-6 b-r"><strong>Name</strong>
								<p>{{ contact.name }}</p>
							</div>
							<div class="col-md-6"><strong>Designation</strong>
								<p>{{ contact.role }}</p>
							</div>
						</div>
						<!-- /.row -->
						<hr>
						<!-- .row -->
						<div class="row text-center m-t-10">
							<div class="col-md-6 b-r"><strong>Email ID</strong>
								<p>{{ contact.email }}</p>
							</div>
							<div class="col-md-6"><strong>Phone</strong>
								<p>{{ contact.phone }}</p>
							</div>
						</div>
						<!-- /.row -->
						<hr>
						<!-- .row -->
						<div class="row text-center m-t-10">
							<div class="col-md-12"><strong>Address</strong>
								<p>{{ contact.address }}, {{ contact.location }}.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-8 col-xs-12">
				<div class="white-box">
					<ul class="nav nav-tabs tabs customtab">
						<li class="tab" v-bind:class="[ activetab === '1' ? 'active' : '' ]">
							<a href="#profile" v-on:click.prevent="activetab='1'"> <span class="visible-xs"><i class="fa fa-user"></i></span> <span class="hidden-xs">Profile</span> </a>
						</li>
						<li class="tab" v-bind:class="[ activetab === '2' ? 'active' : '' ]">
							<a href="#settings" v-on:click.prevent="activetab='2'"> <span class="visible-xs"><i class="fa fa-cog"></i></span> <span class="hidden-xs">Edit Detail</span> </a>
						</li>
					</ul>
					<div class="tab-content">
						<div v-if="activetab ==='1'" class="tab-panee" id="profile">
							<div class="row">
								<div class="col-md-3 col-xs-6 b-r">
									<strong>Full Name</strong>
									<br>
									<p class="text-muted">{{ contact.name }}</p>
								</div>
								<div class="col-md-3 col-xs-6 b-r">
									<strong>Mobile</strong>
									<br>
									<p class="text-muted">{{ contact.phone }}</p>
								</div>
								<div class="col-md-3 col-xs-6 b-r">
									<strong>Email</strong>
									<br>
									<p class="text-muted">{{ contact.email }}</p>
								</div>
								<div class="col-md-3 col-xs-6">
									<strong>Location</strong>
									<br>
									<p class="text-muted">{{ contact.location }}</p>
								</div>
							</div>
							<hr>
							<p class="m-t-30">{{ contact.mess }}</p>
							<h4 class="font-bold m-t-30">Skill Set</h4>
							<hr>
							<div v-for="(tags, index) in contact.tags.length">
								<h5>{{contact.tags[index]}}</h5>
								<div class="progress">
									<div class="progress-bar" :class="progressColor(index)" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%;"> <span class="sr-only">100% Complete</span> </div>
								</div>
							</div>
						</div>
						<div v-if="activetab ==='2'" class="tab-panee" id="settings">
							<form class="form-horizontal form-material">
								<div class="form-group">
									<label class="col-md-12">Full Name</label>
									<div class="col-md-12">
										<input v-model="contact.name"
												type="text" placeholder="Johnathan Doe" class="form-control form-control-line">
									</div>
								</div>
								<div class="form-group">
									<label for="example-email" class="col-md-12">Email</label>
									<div class="col-md-12">
										<input v-model="contact.email"
												type="email" placeholder="johnathan@admin.com" class="form-control form-control-line" name="example-email" id="example-email">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-12">Phone</label>
									<div class="col-md-12">
										<input v-model="contact.phone"
												type="text" placeholder="123 456 7890" class="form-control form-control-line">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-12">Address</label>
									<div class="col-md-12">
										<input v-model="contact.address"
												type="text" placeholder="E104, Dharti-2, Chandlodia Ahmedabad Gujarat" class="form-control form-control-line">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-12">Message</label>
									<div class="col-md-12">
										<textarea v-model="contact.mess" placeholder="Your Message" class="form-control form-control-line"></textarea>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-12">Select Country</label>
									<div class="col-sm-12">
										<select v-model="contact.location" 
												class="form-control form-control-line selectpicker" data-style="form-control">
											<option>England</option>
											<option>India</option>
											<option>Usa</option>
											<option>Canada</option>
											<option>Thailand</option>
											<option>Ukraine</option>
											<option>Russia</option>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-12">Skill Set</label>
									<div class="col-sm-12">
										<input-tags v-model="contact.tags">
											<div class="tags-input"
												 slot-scope="{tag,removeTag,inputEventHandlers,inputBindings }">
												<span v-for="tag in contact.tags"
													  class="tags-input-tag">
													<span>{{ tag }}</span>
													<button type="button" class="tags-input-remove"
														v-on:click="removeTag(tag)"
													>&times;</button>
												</span>
												<input class="tags-input-text form-control" placeholder="Add tag..." type="text"
														v-on:keydown.enter="$event.stopPropagation()"
														v-on="inputEventHandlers"
														v-bind="inputBindings">
											</div>
										</input-tags>
									</div>
								</div>
								<div class="form-group">
									<div class="col-sm-12">
										<button @click.prevent="updateContactItem"
												class="btn btn-success">
											Update Profile
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	const jsonObject = 'https://api.myjson.com/bins/twsm8'
	import { VueTags } from 'vue-tags-component';
	import {mapGetters, mapActions} from 'vuex';

	export default {
		data(){
			return {
				activetab: '1',
				progressbar: [
					'progress-bar-primary',
					'progress-bar-success',
					'progress-bar-custom',
					'progress-bar-danger',
					'progress-bar-info',
					'progress-bar-inverse'
				],
				progressbarColor: null,
			}
		},
		created(){
			this.$store.dispatch('contacts/loadContacts');
		},
		methods: {
			imageIndexOf(){
				return this.contact.image.indexOf("base64")+1 ? (''+this.contact.image+'') : ('../'+this.contact.image+'');
			},
			updateContactItem(){
				Vue.set(this.contacts, {
				/*this.$store.commit('contacts/changeContacts', {*/
					'name': this.name,
					'email': this.email,
					'phone': this.phone,
					'address': this.address,
					'mess': this.mess,
					'location': this.location,
					'tags': this.tags,
				});

				this.changeSave();
			},
			changeSave(){
				Vue.http.put(''+ jsonObject +'', {
					contacts: this.contacts,
				}).then(function(data){
					console.log(data);
				})
				.catch(err => {
					console.log(err);
				});
			},
			progressColor(index){
				index = Math.floor(Math.random() * this.progressbar.length);
				return this.progressbarColor = this.progressbar[index];
			},
		},
		computed: {
			...mapGetters('contacts', {
				contacts: 'contacts'
			}),
			id(){
				return this.$route.params.id;
			},
			contact(){
				return this.$store.getters['contacts/contact'](this.id);
			},

			...mapGetters([
				'name', 'email', 'phone', 'address', 'location', 'mess', 'tags'
			]),
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
	.tags-input{
		color: white;
	}
	.tags-input-tag{
		display: -webkit-inline-flex;
		display: -moz-inline-flex;
		display: -ms-inline-flex;
		display: -o-inline-flex;
		display: inline-flex;
		-ms-align-items: center;
		align-items: center;
		background: #2cabe3;
		border-radius: 3px;
		padding: 4px 2px 2px 8px;
		margin-right: 10px;
		margin-bottom: 10px;
	}
	.tags-input-remove{
		border: 0;
		border-radius: 0;
		background: none;
		outline: none;
	}
	.tags-input-text{}
</style>