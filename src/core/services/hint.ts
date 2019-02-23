
import Vue from 'vue'
import iView from 'iview'
import Router from '../../router';
Vue.use(iView)

Router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

Router.afterEach(route => {
    iView.LoadingBar.finish();
});
