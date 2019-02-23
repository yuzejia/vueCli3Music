<template>
<div>

   <div class="text-cent"> 欢迎页面</div>
</div>
</template>

<script lang='ts'>
import TabBar from './tabBar.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TabBar,
  },
})
export default class Index extends Vue {
    
  
}
</script>

<style scoped>
    
</style>