<template>
  <div class="Enter animated fadeIn">
    <div class="top animated fadeInLeft">
      <p>简</p>
      <p>乐</p>
    </div>
    <div class="content">

    </div>
    <div class="bottom animated fadeInUp">
      <p>---<span>music</span>---</p>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ServerApi from '@/api/server-api';
import Message from '@/core/services/message';
import PathData from '@/assets/data/path_data'
@Component
export default class Enter extends Vue {
   created() {
     setTimeout(() => {
     this.$router.push(PathData.INDEX)
     }, 3000)
   }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .Enter{
    height: 100%;
    padding: 1rem;
    position: relative;
    background: #adccff4d;
    .top{
      p{
        font-size: 0.8rem;
      }
    }
    .content{
      height: 60%;
    }
    .bottom{
      font-size: 0.4rem;
      text-align: center
    }
  }
</style>
