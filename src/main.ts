import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import '@mdi/font/css/materialdesignicons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.$cookies.config('1h')

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
