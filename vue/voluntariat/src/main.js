// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuetify)
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  strict: true,
  state: {
    activitats: [
      { 'name': 'hola', 'desc': 'va be?' },
      { 'name': 'adeu', 'desc': 'nose' }
    ]
  },
  getters: {
    activitats: state => {
      console.log(state.activitats)
      let act = state.activitats
      return act
    }
  },
  mutations: {
    activitats (state, activitats) {
      state.activitats = activitats
    }
  },
  actions: {
    // fetchActivitats (context) {
    //   axios.get('api/activitats').then((response) => {
    //     let activitats = response.data
    //     context.commit('activitats', activitats)
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // }
    fetchActivitats (context) {
      let activitats = [
        { 'nome': 'hola', 'desc': 'va be?' },
        { 'nom': 'adeu', 'desc': 'nose' }
      ]
      context.commit('activitats', activitats)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
