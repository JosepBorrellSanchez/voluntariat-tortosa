import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

import Landing from '../components/Landing'
import Login from '../components/Login'
import EntityMainLayout from '../components/layouts/EntityMainLayout'
import ActivitatsContainer from '../components/ActivitatsContainer'
import Activitats from '../components/Activitats'
import ActivitatContainer from '../components/ActivitatContainer'
import Activitat from '../components/Activitat'
import Dashboard from '../components/Dashboard'
import Inbox from '../components/Inbox'

import AdminMainLayout from '../components/layouts/AdminMainLayout'
import AdminDashboard from '../components/AdminDashboard'
import AllActivitiesContainer from '../components/AllActivitiesContainer'
import AllActivities from '../components/AllActivities'
import EntitiesContainer from '../components/EntitiesContainer'
import Entities from '../components/Entities'
import EntityContainer from '../components/EntityContainer'
import Entity from '../components/Entity'
import VolunteersContainer from '../components/VolunteersContainer'
import Volunteers from '../components/Volunteers'
import VolunteerContainer from '../components/VolunteerContainer'
import Volunteer from '../components/Volunteer'
import AdminsContainer from '../components/AdminsContainer'
import Admins from '../components/Admins'
import AdminContainer from '../components/AdminContainer'
import Admin from '../components/Admin'
import CreateActivity from '../components/CreateActivity'

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
      path: '/admin',
      component: AdminMainLayout,
      meta: {
        requiresAuth: true,
        admin: true
      },
      children: [
        {
          path: '/admin',
          name: 'AdminDashboard',
          component: AdminDashboard
        },
        {
          path: '/activitats',
          component: AllActivitiesContainer,
          children: [
            {
              path: '/activitats',
              name: 'AllActivities',
              component: AllActivities
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
              name: 'Activitat',
              component: Activitat
            }
          ]
        },
        {
          path: '/entitats',
          component: EntitiesContainer,
          children: [
            {
              path: '/entitats',
              name: 'Entities',
              component: Entities
            }
          ]
        },
        {
          path: '/entitats/:id',
          component: EntityContainer,
          props: true,
          children: [
            {
              path: '/entitats/:id',
              name: 'Entity',
              component: Entity
            }
          ]
        },
        {
          path: '/voluntaris',
          component: VolunteersContainer,
          children: [
            {
              path: '/voluntaris',
              name: 'Volunteers',
              component: Volunteers
            }
          ]
        },
        {
          path: '/voluntaris/:id',
          component: VolunteerContainer,
          props: true,
          children: [
            {
              path: '/voluntaris/:id',
              name: 'Volunteer',
              component: Volunteer
            }
          ]
        },
        {
          path: '/admins',
          component: AdminsContainer,
          meta: {
            superAdmin: true
          },
          children: [
            {
              path: '/admins',
              name: 'Admins',
              component: Admins
            }
          ]
        },
        {
          path: '/admins/:id',
          component: AdminContainer,
          props: true,
          meta: {
            superAdmin: true
          },
          children: [
            {
              path: '/admins/:id',
              name: 'Admin',
              component: Admin
            }
          ]
        }
      ]
    },
    {
      path: '/entity',
      name: 'Layout',
      component: EntityMainLayout,
      meta: {
        requiresAuth: true,
        // entity: true
      },
      children: [
        {
          path: '/entity',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: '/activitats_user',
          component: ActivitatsContainer,
          children: [
            {
              path: '/activitats_user',
              name: 'Activitats',
              component: Activitats
            }
          ]
        },
        {
          path: '/activitats_user/:id',
          component: ActivitatContainer,
          props: true,
          children: [
            {
              path: '/activitats_user/:id',
              name: 'ShowActivitat',
              component: Activitat
            }
          ]
        },
        {
          path: '/crear_activitat',
          name: 'CrearActivitat',
          component: CreateActivity
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
  if(to.matched.some(record => record.meta.admin) && (store.state.roles !== 'admin' && store.state.roles !== 'superAdmin')) {
    window.console.log('Not allowed')
    next({ path: '/dash' })
  } else {
    if(to.matched.some(record => record.meta.superAdmin) && store.state.roles !== 'superAdmin') {
      console.log('Not allowed')
      next({ path: '/admin' })
    } else {
      if (to.matched.some(record => record.meta.requiresAuth) && ( !store.state.token || store.state.token === null)) {
        window.console.log('Not authenticated')
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    }
  }

})

export default router
