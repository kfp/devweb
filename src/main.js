import Vue from 'vue'
import App from './App'
import router from './router'
import Menu from '@/components/Menu'

Vue.config.productionTip = false

Vue.component('menu-component', Menu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
