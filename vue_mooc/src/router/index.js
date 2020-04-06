import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './router'
import {setTitle} from '../lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  // mode: 'history'
})

// 解决跳转后滚动条位置不正确的bug
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

// 全局前置守卫，页面标题设置和登陆拦截
router.beforeEach((to, from, next) => {
  // to：跳转路由对象
  // from：当前路由对象
  // next：跳转函数

  // 如果有meta属性，根据 meta.title 设置网页标题
  to.meta && setTitle(to.meta.title)
  next()
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && to.path !== '/register' && !localStorage.token) {
    return next('/login')
  }

  next()
})


export default router
