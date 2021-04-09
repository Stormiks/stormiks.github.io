import'less/style.less'
import $ from 'jquery'

window.$ = $

import Vue from "vue"

import App from "./App.vue"
import PublicLayout from '@/layouts/Public.vue'

import router from "./router"
import store from './store'

Vue.config.productionTip = false

Vue.component('public-layout', PublicLayout)

export const eBus = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
