import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { HttpService } from '../api/http-service';
import HttpServicepath from '../api/http-service-path';
import InSearch from "@/core/object/in-search";

const musicStore = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {

        getMusic() {

        }

    },

    actions: {

         getMusic: async (commit, params) => {
            // 搜索 歌单
            const inSearch = new InSearch();
            inSearch.key = '579621905'
            inSearch.s = params.s;
            inSearch.type = params.type;
            inSearch.limit = '30';
            inSearch.offset = '0';
            const res = HttpService.get(HttpServicepath.SEARCH, inSearch);
            window.console.log(res);
            
        }
    }
  }
);
 
export default musicStore;