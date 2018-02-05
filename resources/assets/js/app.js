
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import axios from 'axios'
import router from './voluntariat/router'
import App from './voluntariat/App'

Vue.use(Vuetify)
Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,
    state: {
      activitats: [],
    },
    getters: {
      activitats: state => {
        return state.activitats
      }
    },
    mutations: {
      activitats (state, activitats) {
        state.activitats = activitats
      }
    },
    actions: {
      fetchActivitats (context) {
        axios.get('api/activitats').then((response) => {
          let activitats = response.data
          context.commit('activitats', activitats)
          context.commit('activitats', activitats)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('app-voluntariat', require('./voluntariat/App.vue'));

const app = new Vue({
    el: '#app',
    components: { App },
    store,
    router
});
