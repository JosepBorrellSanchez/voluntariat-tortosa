import axios from 'axios'
import * as actionTypes from './action-types.js'
import * as mutationTypes from './mutation-types.js'
import createApi from '../api/api_crud_activitats'

const crud = createApi('/api/activitats')

export default {
    [actionTypes.FETCH_ACTIVITATS]: (context) => {
        crud.getAll().then((response) => {
            let activitats = response.data
            context.commit(mutationTypes.SET_ACTIVITATS, activitats)
        }).catch((error) => {
            console.log(error)
        })
    },
    [actionTypes.GET_ACTIVITAT]: (context, id) => {
        crud.get(id).then((response) => {
            let activitat = response.data
            context.commit(mutationTypes.SET_ACTIVITAT, activitat)
        })
    }
}
