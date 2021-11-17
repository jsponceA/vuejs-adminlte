import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/panel',
    component: () => import(/* webpackChunkName: "about" */ '../views/panel/Template'),
    children:[
      {
        path: 'inicio',
        name:'panelInicio',
        component: () => import(/* webpackChunkName: "about" */ '../views/panel/inicio/Index'),
      },
      {
        path: 'usuarios',
        name:'panelUsuarios',
        component: () => import(/* webpackChunkName: "about" */ '../views/panel/usuarios/Index'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
