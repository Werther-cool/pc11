// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'

Vue.use(VueLazyload)

Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了


// or with options
Vue.use(VueLazyload, {
  preLoad: 10,
  error: 'http://via.placeholder.com/710x380',
  loading: 'http://via.placeholder.com/710x380',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
