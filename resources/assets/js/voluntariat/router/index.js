import Vue from 'vue'
import Router from 'vue-router'
//import ActivitatsContainer from '../components/ActivitatsContainer'
import Activitats from '../components/Activitats'
import Dashboard from '../components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/activitats',
      name: 'Activitats',
      component: Activitats
    }
  ]
})
