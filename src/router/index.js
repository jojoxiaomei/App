import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {// 登录
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {// 主页
      path: '/home',
      name: '/',
      component: () => import('@/views/home')
    }
  ]
})
