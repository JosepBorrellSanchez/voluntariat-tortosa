
import Vue from 'vue'
import Vuex from 'vuex' 
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,
    state: {
        activitats: [],
        activitats_user: [],
        activitat: [],
        loading: false,
        user: [],
        logged: false,
        token: null
    },
    getters,
    mutations,
    actions
})

export default store