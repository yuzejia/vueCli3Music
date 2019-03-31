import { Vue } from 'vue-property-decorator';
import App from './App.vue';
import Router from './router';
import './core/services/hint';
import 'iview/dist/styles/iview.css';
import './assets/less/base-less.less';
import 'amfe-flexible';
import NoInfo from "@/components/share/index"
import Message from '@/core/services/message'
import 'animate.css' // npm install animate.css --save安装，在引入
 
Vue.config.productionTip = false;
Vue.use(NoInfo)


//new Vue 启动

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')




