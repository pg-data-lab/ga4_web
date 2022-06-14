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
    component: () => import(/* webpackChunkName: "about" */ '../views/SuccessView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
