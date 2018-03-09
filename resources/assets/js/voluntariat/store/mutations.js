
import * as types from './mutation-types'

export default {
    [ types.LOGGED ] (state, logged) {
        state.logged = logged
    },
    [ types.TOKEN ] (state, token) {
        state.token = token
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
    [types.SET_LOADING]: (state, loading) => {
      state.loading = loading
    },
    [types.SET_USER]: (state, user) => {
        state.user = user
    }
}
