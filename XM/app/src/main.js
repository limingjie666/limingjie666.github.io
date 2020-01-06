import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueResource)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
