import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Afeng from '../views/Afeng'
import Haiwen from '../views/Haiwen'
import Login from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/afeng',
    name: "Afeng",
    component: Afeng
  },
  {
    path: '/haiwen',
    name: "Haiwen",
    component: Haiwen
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => { //回调接收to,from, next
  // console.log('to',to);             // 即将访问的路由
  // console.log('from',from);           // 即将离开的路由
  //可以控制要访问的路由
  if (to.name !== 'login' && localStorage.getItem('islogin') == 'yes') {  //如果不访问login页面,且没有登录，就重定向到login
    console.log('未登录')
    next()

  } else {
    next('/login')
  }              


})
export default router
