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
          context.commit(mutations.ROLES, roles[0])
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
    [actionTypes.FETCH_ACTIVITATS_USER]: function(context, id) {
        context.commit(mutations.SET_LOADING, true)
        crud.getAllFromUser(id).then((response) => {
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
        crud.delete(activitat).then((response) => {
            context.dispatch(actionTypes.FETCH_ACTIVITATS_USER)
        }).catch((error) => {
          console.log(error);
        })
    },
    [ actionTypes.DETACH_ACTIVITY ] (context, activitat) {
      axios.delete('api/activitats/activitat/' + activitat.id).then((response) => {
        let user = context.state.user
        context.dispatch(actionTypes.FETCH_ACTIVITATS_USER, user.id)
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
    },
    [ actionTypes.FETCH_ENTITIES ]: (context) => {
      axios.get('api/entitats').then((response) => {
        let entities = response.data
        context.commit(mutations.SET_ENTITIES, entities)
      }).catch((error) => {
        console.log(error.message())
      })
    },
    [ actionTypes.GET_ENTITY ]: (context, id) => {
      axios.get('api/entitats/' + id).then((response) => {
        let entity = response.data
        context.commit(mutations.SET_ENTITY, entity)
      }).catch((error) => {
        console.log(error.message())
      })
    },
    [ actionTypes.DELETE_ENTITY ]: (context, id) => {
      axios.delete('api/entitats/' + id).then((reponse) => {
        context.dispatch(actionTypes.FETCH_ENTITIES)
      }).catch((error) => {
        console.log(error.message)
      })
    },
    [ actionTypes.FETCH_VOLUNTEERS ]: (context) => {
      axios.get('api/voluntaris').then((response) => {
        let volunteers = response.data
        context.commit(mutations.SET_VOLUNTEERS, volunteers)
      }).catch((error) => {
        console.log(error.message)
      })
    },
    [ actionTypes.GET_VOLUNTEER ]: (context, id) => {
      axios.get('api/voluntaris/' + id).then((response) => {
        let volunteer = response.data
        context.commit(mutations.SET_VOLUNTEER, volunteer)
      }).catch((error) => {
        console.log(error.message)
      })
    },
    [ actionTypes.GET_INFO ]: (context, id) => {
      axios.get('api/info/' + id).then((response) => {
        let info = response.data
        context.commit(mutations.SET_INFO, info)
      }).catch((error) => {
        console.log(error.message)
      })
    },
    [ actionTypes.DELETE_VOLUNTEER ]: (context, id) => {
      axios.delete('api/voluntaris/' + id).then((response) => {
        context.dispatch(actionTypes.FETCH_VOLUNTEERS)
      }).catch((error) => {
        console.log(error.message)
      })
    },
    [ actionTypes.FETCH_ADMINS]: (context) => {
      axios.get('api/admins').then((response) => {
        let admins= response.data
        context.commit(mutations.SET_ADMINS, admins)
      }).catch((error) => {
        console.log(error.message)
      })
    },
    [ actionTypes.GET_ADMIN]: (context, id) => {
      axios.get('api/admins/' + id).then((response) => {
        let admin= response.data
        context.commit(mutations.SET_ADMIN, admin)
      }).catch((error) => {
        console.log(error.message)
      })
    },
    [ actionTypes.DELETE_ADMIN ]: (context, id) => {
      axios.delete('api/admins/' + id).then((response) => {
        context.dispatch(actionTypes.FETCH_ADMINS)
      }).catch((error) => {
        console.log(error.message)
      })
    }
}
