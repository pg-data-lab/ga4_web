import { createRouter, createWebHistory } from 'vue-router'
import TopView from '../views/TopView.vue'

const routes = [
  {
    path: '/',
    name: 'top',
    component: TopView
  },
  {
    path: '/success',
    name: 'success',

    component: () => import(/* webpackChunkName: "about" */ '../views/SuccessView.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrivacyView.vue')
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
