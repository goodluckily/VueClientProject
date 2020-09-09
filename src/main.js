import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
import router from './router/index.js'


import Meta from 'vue-meta'
Vue.use(Meta)  //注册使用vue-meta模块

//重置样式生效
import './assets/css/reset.css'

//Vuex 状态管理
import store from './store/store.js'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
