
import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import Index from './components/home/index.vue'
import Logn from './components/home/logn.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: Logn},
        { path: '/Index', component: Index},
    ]
  });


  router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});

export default router;
