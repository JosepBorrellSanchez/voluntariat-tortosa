import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const Landing = () => System.import('../components/Landing.vue');
const Login = () => System.import('../components/Login')
const EntityMainLayout = () => System.import('../components/layouts/EntityMainLayout')
const ActivitatsContainer = () => System.import('../components/ActivitatsContainer')
const Activitats = () => System.import('../components/Activitats')
const ActivitatContainer = () => System.import('../components/ActivitatContainer')
const Activitat = () => System.import('../components/Activitat')
const Dashboard = () => System.import('../components/Dashboard')
const Inbox = () => System.import('../components/Inbox')
const AdminMainLayout = () => System.import('../components/layouts/AdminMainLayout')
const AdminDashboard = () => System.import('../components/AdminDashboard')
const AllActivitiesContainer = () => System.import('../components/AllActivitiesContainer')
const AllActivities = () => System.import('../components/AllActivities')
const EntitiesContainer = () => System.import('../components/EntitiesContainer')
const Entities = () => System.import('../components/Entities')
const EntityContainer = () => System.import('../components/EntityContainer')
const Entity = () => System.import('../components/Entity')
const VolunteersContainer = () => System.import('../components/VolunteersContainer')
const Volunteers = () => System.import('../components/Volunteers')
const VolunteerContainer = () => System.import('../components/VolunteerContainer')
const Volunteer = () => System.import('../components/Volunteer')
const AdminsContainer = () => System.import('../components/AdminsContainer')
const Admins = () => System.import('../components/Admins')
const AdminContainer = () => System.import('../components/AdminContainer')
const Admin = () => System.import('../components/Admin')
const CreateActivity = () => System.import('../components/CreateActivity')
const NotFoundComponent = () => System.import('../components/NotFoundComponent')


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
