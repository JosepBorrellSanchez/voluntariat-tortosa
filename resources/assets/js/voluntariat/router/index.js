import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

import Landing from '../components/Landing'
import Login from '../components/Login'
import MainLayout from '../components/layouts/MainLayout'
import ActivitatsContainer from '../components/ActivitatsContainer'
import Activitats from '../components/Activitats'
import ActivitatContainer from '../components/ActivitatContainer'
import Activitat from '../components/Activitat'
import Dashboard from '../components/Dashboard'
import Inbox from '../components/Inbox'

import NotFoundComponent from '../components/NotFoundComponent'


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/app',
      name: 'Layout',
      component: MainLayout,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/dash',
          name: 'Dashboard',
          component: Dashboard,
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
              component: Activitat
            }
          ]
        },
        {
          path: '/inbox',
          name: 'Inbox',
          component: Inbox
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundComponent
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && ( !store.state.token || store.state.token === null)) {
    window.console.log('Not authenticated')
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router


