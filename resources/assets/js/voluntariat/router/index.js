import Vue from 'vue'
import Router from 'vue-router'
import ActivitatsContainer from '../components/ActivitatsContainer'
import Activitats from '../components/Activitats'
import Dashboard from '../components/Dashboard'
import ActivitatContainer from '../components/ActivitatContainer'
import Activitat from '../components/Activitat'

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
      component: ActivitatsContainer,
      children: [
        {
          path: '/activitats',
          name: 'Activitats',
          component: Activitats
        }
      ]
    },
    {
      path: '/activitats/:id',
      component: ActivitatContainer,
      props: true,
      children: [
        {
          path: '/activitats/:id',
          name: 'ShowActivitat',
          component: Activitat,
          props: true
        }
      ]
    }
  ]
})
