import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () =>
      import('../views/About.vue')
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

// eslint-disable-next-line
const validate = (to: any, from: any, next: any) => {
  if (to && from) {
    next()
  } else {
    next(from)
  }
}

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    validate(to, from, next)
  }
})
export default router
