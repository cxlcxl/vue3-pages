import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router,
  store
}).$mount('#app')
