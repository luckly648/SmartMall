import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant-ui'
import '@/styles/common.less'
// import { Button, Switch, Rate } from 'vant'
// Vue.use(Button)
// Vue.use(Switch)
// Vue.use(Rate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
