<template>
  <div class="Enter">
    <p>music</p>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Enter extends Vue {
   created() {
     this.loading()
   }



  loading () {
    const msg: any = this.$Message.loading({
        content: '..欢迎您..',
        duration: 0
    });
    setTimeout(msg, 3000);
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
