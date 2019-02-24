<template>
  <div class="songLIst">
      <p v-for="(item, index) in SongList" :key="index">
        <span class="name">{{item.name}}</span>
        <span class="pull-right">{{item.singer}}</span>
          
          </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SongLIst extends Vue {
  @Prop() private SongList!: Array<Object>;


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
