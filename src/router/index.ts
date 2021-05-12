import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// eslint-disable-next-line import/no-unresolved
import Home from '@/views/home.vue'
// eslint-disable-next-line import/no-unresolved
import Vuex from '@/views/vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => {
      import('../views/axios.vue')
    }
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
