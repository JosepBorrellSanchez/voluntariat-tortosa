import axios from 'axios'
import * as actionTypes from './action-types.js'
import * as mutations from './mutation-types.js'
import createApi from '../api/api_crud_activitats'
import auth from '../api/auth'

const crud = createApi('api/activitats')

export default {
    [ actionTypes.LOGIN ] (context, credentials) {
      return new Promise((resolve, reject) => {
        auth.login(credentials).then(response => {
          context.commit(mutations.LOGGED, true)
          const token = response.data.access_token
          console.log('TOKEN:')
          console.log(token)
          if (token) {
            if (window.localStorage) {
              window.localStorage.setItem('token', token)
            }
            context.commit(mutations.TOKEN, token)
            axios.defaults.headers.common['authorization'] = `Bearer ${token}`
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    [actionTypes.FETCH_ACTIVITATS]: function(context) {
        context.commit(mutationTypes.SET_LOADING, true)
        crud.getAll().then((response) => {
            let activitats = response.data
            context.commit(mutationTypes.SET_ACTIVITATS, activitats)
        }).catch((error) => {
            console.log(error)
        }).then(() => {
            context.commit(mutationTypes.SET_LOADING, false)
        })
    },
    [actionTypes.GET_ACTIVITAT]: (context, id) => {
        crud.get(id).then((response) => {
            let activitat = response.data
            context.commit(mutationTypes.SET_ACTIVITAT, activitat)
        })
    },
    [actionTypes.DELETE_ACTIVITAT]: function(context, activitat) {
        crud.delete(activitat).then((response) => {
            context.dispatch(actionTypes.FETCH_ACTIVITATS)
        }).catch((error) => {
          console.log(error);
        })
    },
    [actionTypes.FETCH_USER]: (context) => {
       axios.get('user/active').then((response) => {
            console.log(response);
           let user = response.data
           context.commit(mutations.SET_USER, user)
       }).catch((error) => {
           console.log(error)
       });
    }
}
