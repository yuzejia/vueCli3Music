<template>
  <div class="search_content" >
  <div class="Search animated fadeInDown" v-if="show">
      <Input v-model="searchText"
        search
        enter-button
        @on-search='seachBtn'
        placeholder="您想听什么告诉我." />
  </div>
  <div class="text" @click="searchShow" v-if="!show">
    <p>你还记得昨天那件最美好的事情吗？</p>
  </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Search extends Vue {
  @Prop() ShowType:any;
   private searchText: string = '';
   private show: boolean = false;

    seachBtn() {
        this.$emit('seachMsg', this.searchText);
    }
    searchShow() {
      this.show = true;
    }

    
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.search_content{
  .text{
    text-align: center;
    font-size: 0.35rem;
    padding: 0.2rem
  }
}
.Search{
    padding: 0.1rem 0.2rem;
    padding-bottom: 0.2rem;
    box-shadow: 0 5px 12px #eee;
  
}
</style>
