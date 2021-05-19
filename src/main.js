import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import router from './router'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
