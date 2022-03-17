import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Deposit.vue')
  },
  {
    path: '/withdrawal',
    name: 'Withdrawal',
    component: () => import(/* webpackChunkName: "sustainability" */ '../views/Withdraw.vue')
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import(/* webpackChunkName: "contact" */ '../views/Login.vue')
  // }
]

const router = createRouter({
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(),
  routes
})

export default router
