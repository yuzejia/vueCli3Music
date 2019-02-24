<template>
  <div class="Enter">
    <p>music</p>
    <button @click="getSongLIst">获取歌曲列表</button>
    <p v-for="(item, index) in songList" :key="index">{{item.name}}</p>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ServerApi from '@/api/server-api';
import Message from '@/core/services/message';
import PathData from '@/assets/data/path_data'
@Component
export default class Enter extends Vue {
  private parm: Object = {key:'579621905',id:'3778678',limit:'5',offset:'10'};
  private songList: Array<Object> = [];;
   created() {
     this.$router.push(PathData.INDEX)
   }

  private getSongLIst() {
      // 调用加载进度
      Message.loadingShow(this);
      // 发起 请求 歌曲列表
      ServerApi.getSongLIst(this.parm)
      .then((data: any) => {
          Message.loadingHide(this);
          this.$Message.success('获取成功');
          this.songList = data.songs
      })
      .catch((error: any) =>{
          Message.loadingError(this);
          this.$Message.error(error);
      })
   }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .Enter{
    text-align: center;
    padding-top: 2rem;
    p{
      font-size: 1rem;
    }
  }
</style>
