import { createRouter, createWebHistory } from 'vue-router'
import route from './router'

const routes = route

const router = createRouter({
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(),
  routes
})

export default router
