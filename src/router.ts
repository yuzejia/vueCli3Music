
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/index.vue'
import Logn from './components/home/logn.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: Logn},
    ]
  });




export default router;
