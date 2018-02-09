import Vue from 'vue'
import Router from 'vue-router'
import DashboardContainer from '@/components/DashboardContainer'
import Dashboard from '@/components/Dashboard'
import ActivitatsContainer from '@/components/ActivitatsContainer'
import Activitats from '@/components/Activitat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DashboardContainer,
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
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
    }
  ]
})
