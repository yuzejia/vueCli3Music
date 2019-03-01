<template>
  <div class="songLIst">
      <p v-for="(item, index) in SongList" :key="index">
        <span class="name" @click="GoPlay(item)">{{item.name}}</span>
        <span class="pull-right">{{item.singer}}</span>
          
          </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ServerApi from '@/api/server-api'
import Message from '@/core/services/message'

@Component
export default class SongLIst extends Vue {
  @Prop() private SongList!: Array<Object>;


    // 选择歌曲
    GoPlay(item: any) {
          // 调用加载进度
      Message.loadingShow(this);
      // 发起 请求 歌曲列表
      ServerApi.getSongDetails(item.id)
      .then((data: any) => {
          Message.loadingHide(this);
          this.$Message.success('获取成功');
          console.log(data)
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
    .songLIst{
        p{
            height: 1.25rem;
            line-height: 1.25rem;
            font-size: 0.4rem;
            padding: 0 0.5rem;
            border-bottom: 1px solid #eee;
            .name{
                font-weight: bold;
                font-size: 0.45rem;
            }
        }
    }
</style>
