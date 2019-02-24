<template>
  <div class="Enter">
    <p>music</p>
    <button @click="get">获取歌曲列表</button>
    <p v-for="(item, index) in songList" :key="index">{{item.name}}</p>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ServerApi from '../../api/server-api';
import Message from '../../core/services/message'
@Component
export default class Enter extends Vue {
  private parm: Object = {key:'579621905',id:'3778678',limit:'5',offset:'10'};
  private songList: Array<Object> = [];;
   created() {
     Message.loading()
     
   }

   get() {
      this.$Loading.start();
          ServerApi.getSongLIst(this.parm)
          .then((data: any) => {
              this.$Loading.finish();
              this.loading(true)
              this.songList = data.songs
          })
          .catch((error: any) =>{
              this.loading(false, error)
          })
   }

   loading(type: boolean, m?: string){
     let text: string | undefined;
     type? text = '成功': text = m || '加载失败~';
    const msg:any = this.$Message.loading({
                          content: text,
                          duration: 0
                      });
    setTimeout(msg, 2000);
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
