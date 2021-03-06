// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Public from './static/css/public.less'
import Index from './static/css/index.less'
// 引入放大镜
import vueMagnify from 'vue-magnify'
import store from './store'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Public)
Vue.use(Index)
Vue.use(vueMagnify)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    let token = window.localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
