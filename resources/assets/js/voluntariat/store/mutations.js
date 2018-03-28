
import * as types from './mutation-types'

export default {
    [ types.LOGGED ] (state, logged) {
        state.logged = logged
    },
    [ types.TOKEN ] (state, token) {
        state.token = token
    },
    [ types.ROLES ] (state, roles) {
        state.roles = roles
    },
    [types.SET_ACTIVITATS]: (state, activitats) => {
        state.activitats = activitats
    },
    [ types.SET_ACTIVITATS_USER ]: (state, activitats) => {
       state.activitats_user = activitats
    },
    [types.SET_ACTIVITAT]: (state, activitat) => {
        state.activitat = activitat
    },
    [ types.SET_ACTIVITY_USERS ]: (state, users) => {
        state.activity_volunteers = users
    },
    [ types.SET_ENTITIES]: (state, entities) => {
        state.entities = entities
    },
    [ types.SET_ENTITY ]: (state, entity) => {
        state.entity = entity
    },
    [ types.SET_VOLUNTEERS ]: (state, volunteers) => {
        state.volunteers = volunteers
    },
    [ types.SET_VOLUNTEER ]: (state, volunteer) => {
        state.volunteer = volunteer
    },
    [ types.SET_INFO ]: (state, info) => {
        state.info = info
    },
    [ types.SET_ADMINS ]: (state, admins) => {
        state.admins = admins
    },
    [ types.SET_ADMIN ]: (state, admin) => {
        state.admin = admin
    },
    [types.SET_LOADING]: (state, loading) => {
      state.loading = loading
    },
    [types.SET_USER]: (state, user) => {
        state.user = user
    }
}
