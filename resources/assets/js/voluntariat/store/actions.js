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
          // console.log('TOKEN:')
          // console.log(token)
          if (token) {
            if (window.localStorage) {
              window.localStorage.setItem('token', token)
            }
            context.commit(mutations.TOKEN, token)
            axios.defaults.headers.common['authorization'] = `Bearer ${token}`
          }
          resolve(response)
          context.dispatch(actionTypes.FETCH_USER)
        }).catch(error => {
          reject(error)
        }).then(() => {
          context.dispatch(actionTypes.DETERMINATE_ROLE)
        })
      })
    },
    [ actionTypes.LOGOUT ] (context) {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user')
      context.commit(mutations.TOKEN, '')
    },
    [ actionTypes.DETERMINATE_ROLE ] (context) {
      axios.get('api/user/roles').then((response) => {
        const roles = response.data
        if (roles) {
          if (window.localStorage) {
            window.localStorage.setItem('roles', roles)
          }
          context.commit(mutations.ROLES, roles)
        }
      }).catch((error) => {
        console.log(error)
      });
    },
    [ actionTypes.FETCH_ACTIVITATS ]: function (context) {
      context.commit(mutations.SET_LOADING, true)
      crud.getAll().then((response) => {
        let activitats = response.data
        context.commit(mutations.SET_ACTIVITATS, activitats)
      }).catch((error) => {
        console.log(error)
      }).then(() => {
        context.commit(mutations.SET_LOADING, false)
      })
    },
    [actionTypes.FETCH_ACTIVITATS_USER]: function(context) {
        let user = context.getters.user
        context.commit(mutations.SET_LOADING, true)
        crud.getAllFromUser(user.id).then((response) => {
            let activitats = response.data
            context.commit(mutations.SET_ACTIVITATS_USER, activitats)
        }).catch((error) => {
            console.log(error)
        }).then(() => {
            context.commit(mutations.SET_LOADING, false)
        })
    },
    [actionTypes.GET_ACTIVITAT]: (context, id) => {
        crud.get(id).then((response) => {
            let activitat = response.data
            context.commit(mutations.SET_ACTIVITAT, activitat)
        })
    },
    [actionTypes.DELETE_ACTIVITAT]: function(context, activitat) {
        console.log('out')
        crud.delete(activitat).then((response) => {
            console.log('in')
            context.dispatch(actionTypes.FETCH_ACTIVITATS_USER)
        }).catch((error) => {
          console.log(error);
        })
    },
    [actionTypes.FETCH_USER]: (context) => {
       axios.get('api/user/active').then((response) => {
         let user = response.data
         context.commit(mutations.SET_USER, user)
         if(user && window.localStorage) {
           window.localStorage.setItem('user', JSON.stringify(user))
         }
       }).catch((error) => {
           console.log(error)
       });
    }
}
