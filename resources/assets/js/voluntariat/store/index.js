
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
        activitat: [],
    },
    getters,
    mutations,
    actions
})

export default store