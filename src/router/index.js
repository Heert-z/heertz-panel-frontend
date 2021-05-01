import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TokenSet from '../views/TokenSet.vue'
import DashboardHome from '../views/dashboard/DashboardHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tokenset',
    name: 'TokenSet',
    component: TokenSet
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
