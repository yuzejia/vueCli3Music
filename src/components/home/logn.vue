
<template>
  <div class="logn">
    欢迎你
    <p>music</p>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Logn extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .logn{
    text-align: center;
    p{
      font-size: 1rem;
    }
  }
</style>
