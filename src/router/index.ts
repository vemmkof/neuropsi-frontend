import Vue from 'vue'
import VueRouter from 'vue-router'
import { roles } from '../scripts/constants'
import { checkToken } from '../scripts/api/oauth-api'
import { setData, removeData } from '../scripts/helper/cookie-helper'
Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () =>
      import('../views/About.vue')
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: () => import('../views/admin/AdminHome.vue'),
    meta: {
      role: roles.admin
    }
  },
  {
    path: '/specialist',
    name: 'SpecialistHome',
    component: () => import('../views/specialist/SpecialistHome.vue'),
    meta: {
      role: roles.specialist
    }
  },
  {
    path: '/patient',
    name: 'PatientHome',
    component: () => import('../views/patient/PatientHome.vue'),
    meta: {
      role: roles.patient
    }
  },
  {
    path: '/*',
    name: 'Login',
    component: () =>
      import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const toLogin = () => {
  removeData()
  window.location.href = '/'
}

// eslint-disable-next-line
const validate = (to: any, from: any, next: any, rol: any) => {
  checkToken()
    .then((result) => {
      const role = setData(result.data)
      if (rol === role) {
        next()
      } else {
        if (roles.admin === role && rol === roles.specialist) {
          next()
        } else {
          from()
        }
      }
    }).catch(() => {
      toLogin()
    })
}

router.beforeEach((to, from, next) => {
  const rol = to.matched ? to.matched[0].meta.role : null
  if (to.matched.some(record => record.meta.role)) {
    validate(to, from, next, rol)
  } else {
    next()
  }
})

export default router
