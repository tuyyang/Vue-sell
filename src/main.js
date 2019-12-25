import Vue from 'vue'
import VueResource from 'vue-resource'
// import './cube-ui'
import App from './App'
import router from './router'

import 'common/stylus/index.styl'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
