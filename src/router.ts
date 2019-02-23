
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/home/index.vue'
import Enter from './components/home/enter.vue'
Vue.use(VueRouter)

// 定义路由
const router = new VueRouter({
    routes: [
        { path: '/', component: Enter},
        { path: '/Index', component: Index},
    ]
  });

export default router;
