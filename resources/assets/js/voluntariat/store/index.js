
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
        entities: [],
        entity: [],
        volunteers: [],
        volunteer: [],
        info: [],
        admins: [],
        admin: [],
        loading: false,
        user: [],
        logged: false,
        token: null,
        roles: null
    },
    getters,
    mutations,
    actions
})

export default store