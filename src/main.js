import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入共同样式
import same from '@/assets/same.css'
// 引入mock模拟的数据
import mock from '@/mock/mockServe.js'


// vue中使用jquery
import $ from 'jquery'
Vue.prototype.$ = $

// 使用element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')