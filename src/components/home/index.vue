<template>
<div>
  <Search @seachMsg='search'></Search>
  <SongLIst :SongList='songList'></SongLIst>
  <NoInfo v-if="songList.length === 0"></NoInfo>
</div>
</template>

<script lang='ts'>
import TabBar from './tabBar.vue'
import Search from '@/components/video/search.vue'
import ServerApi from '@/api/server-api'
import Message from '@/core/services/message'
import SongLIst from '@/components/video/SongLIst.vue'
import InSearch from '@/core/object/in-search'

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TabBar,
    Search,
    SongLIst
  },
})
export default class Index extends Vue {
  private inSearch: InSearch = new InSearch();

  private songList: Array<Object> = [];
  search(value: string) {
    this.inSearch.s = value || ' '
          // 调用加载进度
      Message.loadingShow(this);
      // 发起 请求 歌曲列表
      ServerApi.getSeach(this.inSearch)
      .then((data: any) => {
          Message.loadingHide(this);
          this.$Message.success('获取成功');
          this.songList = data
      })
      .catch((error: any) =>{
          Message.loadingError(this);
          this.$Message.error(error);
      })
  }
}
</script>

<style scoped>
    
</style>