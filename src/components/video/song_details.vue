<template>
  <div class="Song_details">
    <div class="pic">
      <img :src="pic" alt="">
    </div>
    <embed height="100" width="100" :src="songUrl" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Message from '@/core/services/message';
import ServerApi from '@/api/server-api'
@Component
export default class SongDetails extends Vue {
private songUrl: string = '';
private pic: string = '';
private lrc: string = '';
private query: any;
     created() {

      this.query = this.$route.query;
      window.console.log(this.query)
      this.getSongDetails();
     
   }

   beforeCreate() {
     
   }

   // 获取歌曲详情
   getSongDetails(){
      ServerApi.getSongDetails(this.query.id)
          .then((data: any) => {
              Message.loadingHide(this);
              this.$Message.success('获取成功');
              window.console.log(data.url)
              this.songUrl = data.url;
              this.pic = data.pic;
              this.lrc = data.lrc;
              this.getLrc(data.lrc)
          })
          .catch((error: any) =>{
              Message.loadingError(this);
              this.$Message.error(error);
          })
   }

   // 获取歌词
   getLrc(url: string) {

     // 开始获取歌词
     window.console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`')
     ServerApi.getSongLrc(url)
     .then((data:any)=>{
        window.console.log(data)
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
.Song_details{
    width: 100%;
    height: 100%;
}
  .pic{
    height: 100%;
    img {
      height: 100%;
      opacity: 0.6;
    }
  }
</style>
