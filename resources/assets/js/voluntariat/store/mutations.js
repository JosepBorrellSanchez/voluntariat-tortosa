
import * as types from './mutation-types'

export default {
    [types.SET_ACTIVITATS]: (state, activitats) => {
        state.activitats = activitats
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
