<template>
<div clsaa='animated bounceInDown'>
  <div class="seach">
  <Search @seachMsg='search' :ShowType='type'></Search>
  </div>
  <div class="song_content">
    <SongLIst :SongList='songList'></SongLIst>
  </div>
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
  private type: boolean = true;
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
          this.songList = data;
          this.type = false;   // 获取成功
          console.log(this.type)
      })
      .catch((error: any) =>{
          Message.loadingError(this);
          this.$Message.error(error);
      })
  }
}
</script>

<style <style lang="less">
     .seach{
      width: 100%;
      position: fixed;
      top:0;
      left: 0;
      height: 1rem;;
    }
    .song_content{
      margin-top: 1.2rem;
    }
</style>>
 