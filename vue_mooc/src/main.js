import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI)

// 解决跳转后滚动条位置不正确的bug
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vm
