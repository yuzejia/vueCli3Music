import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import './core/services/hint';
import 'iview/dist/styles/iview.css';
import './assets/less/base-less.less';
import 'amfe-flexible';
Vue.config.productionTip = false


//new Vue 启动

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')



