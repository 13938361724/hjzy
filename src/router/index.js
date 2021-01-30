import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/about',
        name: 'About',
        component: () => import( '../views/About.vue')
      },
      {
        path: '/product',//商品管理
        name: 'Product',
        component: () => import( '../views/Product.vue'),
        children:[
          {
            path: 'ongoods',//详情
            name: 'Ongoods',
            component: () => import( '../views/Ongoods.vue')
          },
          {
            path:'modify',//编辑
            name:'Modify',
            component:() => import('../views/Modify.vue')
          }
        ]
      }
    ]
  },
 
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
