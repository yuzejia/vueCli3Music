
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/home/index.vue'
import Enter from './components/home/enter.vue'
import SongDetails from './components/video/song_details.vue'
Vue.use(VueRouter)

// 定义路由
const router = new VueRouter({
    routes: [
        { path: '/',name: 'enter', component: Enter},
        { path: '/Index', component: Index},
        { path: '/songDetails', component: SongDetails},
    ]
  });

export default router;
