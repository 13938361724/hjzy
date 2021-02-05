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
        path: 'about',
        name: 'About',
        component: () => import( '../views/About.vue')
      },
      {
        path: '/product',//商品管理
        name: 'Product',
        component: () => import( '../views/Product.vue'),
      },
      {
        path:'modify',//编辑
        name:'Modify',
        component:() => import('../views/guanli/Modify.vue')
      },
      {
        path: 'ongoods',//详情
        name: 'Ongoods',
        component: () => import( '../views/guanli/Ongoods.vue')
      },
      {
        path:'/addList',//编辑
        name:'AddList',
        component:() => import('../views/guanli/AddList.vue')
      },
      {
        path:'/category',//品类管理
        name:'Category',
        component:() => import('../views/Category.vue')
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
