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
        }).then(() => {
          context.dispatch(actionTypes.FETCH_USER)
        })
      })
    },
    [ actionTypes.LOGOUT ] (context) {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user')
      context.commit(mutations.TOKEN, '')
    },
    [ actionTypes.DETERMINATE_ROLE ] (context, router) {
      axios.get('api/user/roles').then((response) => {
        const roles = response.data
        if (roles) {
          if (window.localStorage) {
            window.localStorage.setItem('roles', roles)
          }
          context.commit(mutations.ROLES, roles[0])
        }
        if (roles.includes('admin') || roles.includes('superAdmin')) {
          router.push('/admin')
        } else if (roles.includes('entity')){
          router.push('/entity')
        } else if (roles.includes('volunteer')) {
          router.push('*')
          // router.push('/volunteer')
        } else {
          router.push('/login')
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
        axios.get('api/activitats/user/' + id).then((response) => {
            let activitats = response.data
            context.commit(mutations.SET_ACTIVITATS_USER, activitats)
        }).catch((error) => {
            console.log(error)
        }).then(() => {
            context.commit(mutations.SET_LOADING, false)
        })
    },
    [ actionTypes.FETCH_ENTITY_ACTIVITIES ]: function (context, id) {
      context.commit(mutations.SET_LOADING, true)
      axios.get('api/activitats/entitat/' + id).then((response) => {
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
    // Refactor: DELETE_USER_ACTIVITY
    [actionTypes.DELETE_ACTIVITAT]: function(context, { activitat, user_id }) {
        context.commit(mutations.SET_LOADING, true)
        axios.delete('api/activitats/' + activitat.id).then((response) => {
            context.dispatch(actionTypes.FETCH_ACTIVITATS_USER, user_id)
            context.dispatch(actionTypes.FETCH_ENTITY_ACTIVITIES, user_id)
        }).catch((error) => {
          console.log(error);
        }).then(() => {
          context.commit(mutations.SET_LOADING, false)
        })
    },
    [ actionTypes.DELETE_ACTIVITY ]: function (context, activitat) {
      context.commit(mutations.SET_LOADING, true)
      axios.delete('api/activitats/' + activitat.id).then((reponse) => {
        context.dispatch(actionTypes.FETCH_ACTIVITATS)
      }).catch((error) => {
        console.log(error.message)
      }).then(() => {
        context.commit(mutations.SET_LOADING, false)
      })
    },
    [ actionTypes.DETACH_ACTIVITY ] (context,  { activity, user_id }) {
      context.commit(mutations.SET_LOADING, true)
      axios.delete('api/activitats/' + user_id + '/activitat/' + activity.id).then((response) => {
        context.dispatch(actionTypes.FETCH_ACTIVITATS_USER, user_id)
      }).catch((error) => {
        console.log(error.message)
      }).then(() => {
        context.commit(mutations.SET_LOADING, false)
      })
    },
    [ actionTypes.DETACH_VOLUNTEER ]: (context,  { user, activityId }) => {
      context.commit(mutations.SET_LOADING, true)
      axios.delete('api/activitats/' + activityId + '/voluntaris/' + user.id).then((response) => {
        context.dispatch(actionTypes.FETCH_ACTIVITY_USERS, activityId)
      }).catch((error) => {
        console.log(error.message)
      }).then(() => {
        context.commit(mutations.SET_LOADING, false)
      })
    },
    [ actionTypes.DETACH_ENTITY ]: (context, { user, activityId}) => {
      context.commit(mutations.SET_LOADING, true)
      axios.delete('api/activitats/' + activityId + '/entitats/' + user.id).then((reponse) => {
        context.dispatch(actionTypes.FETCH_ACTIVITY_ENTITIES, activityId)
      }).catch((error) => {
        console.log(error.message)
      }).then(() => {
        context.commit(mutations.SET_LOADING, false)
      })
    },
    [ actionTypes.FETCH_ACTIVITY_USERS ]: (context, id) => {
      context.commit(mutations.SET_LOADING, true)
      axios.get('api/activitats/' + id + '/users').then((response) => {
        let users = response.data
        console.log(users)
        context.commit(mutations.SET_ACTIVITY_USERS, users)
      }).catch((error) => {
        console.log(error.message)
      }).then(() => {
        context.commit(mutations.SET_LOADING, false)
      })
    },
    [ actionTypes.FETCH_ACTIVITY_ENTITIES ]: (context, id) => {
      context.commit(mutations.SET_LOADING, true)
      axios.get('api/activitats/' + id + '/entitats').then((response) => {
        let entities = response.data
        context.commit(mutations.SET_ACTIVITY_ENTITIES, entities)
      }).catch((error) => {
        console.log(error.message)
      }).then(() => {
        context.commit(mutations.SET_LOADING, false)
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
