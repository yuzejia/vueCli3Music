<template>
  <div class="Search">
      <Input v-model="searchText"
        search
        enter-button
        @on-search='seachBtn'
        placeholder="请搜索歌单." />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Search extends Vue {
   private searchText: string = '';

    seachBtn() {
        this.$emit('seachMsg', this.searchText);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.Search{
    padding: 0.1rem 0.2rem;
    padding-bottom: 0.2rem;
    box-shadow: 0 5px 12px #eee;
}
</style>
