import axios from 'axios'
import * as actionTypes from './action-types.js'
import * as mutationTypes from './mutation-types.js'
import createApi from '../api/api_crud_activitats'

const crud = createApi('api/activitats')

export default {
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
      axios.get('api/user').then((response) => {
          console.log(response.data)
      }).catch((error) => {
          console.log(error)
      })
       // axios.get('api/user/active').then((response) => {
       //      console.log(response);
       //     let user = response.data
       //     context.commit(mutationTypes.SET_USER, user)
       // }).catch((error) => {
       //     console.log(error)
       // }) ;
    }
}
