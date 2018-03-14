
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './voluntariat/router'
import App from './voluntariat/App'
import store from './voluntariat/store'

import * as mutations from './voluntariat/store/mutation-types'

Vue.use(Vuetify)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('app-voluntariat', require('./voluntariat/App.vue'));

if (window.localStorage) {
  let token = window.localStorage.getItem('token') || null
  if (token) {
    // store.setTokenAction(token)
    store.commit(mutations.TOKEN, token)
    axios.defaults.headers.common['authorization'] = `Bearer ${token}`
  }

  let user = window.localStorage.getItem('user') || null
  if (user) {
    store.commit(mutations.SET_USER, JSON.parse(user))
  }

  let roles = window.localStorage.getItem('roles') || null
  if (roles) {
    store.commit(mutations.ROLES, roles)
  }
}

const app = new Vue({
    el: '#app',
    components: { App },
    store,
    router
});
