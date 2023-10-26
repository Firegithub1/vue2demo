/*
 * @Author: YiY
 * @Date: 2023-10-08 08:46:42
 * @LastEditTime: 2023-10-08 08:46:42
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/table',
    name:'table',
    component:() => import('../pages/table')
  },
  {
    path:'/set',
    name:'set',
    component:() => import('../pages/set')
  },
  {
    path: '/routes',
    name: 'routes',
    component: () => import('../pages/routesName')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
