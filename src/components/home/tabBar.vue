
<template>
<div class="tab_content">
    <div class="tab_bar">
        <div @click="goToURL(item.url)" v-for="(item, index) in tabList" :key="index">{{item.name}}</div>
    </div>
</div>
</template>

<script lang='ts'>
import BarJson from '../../assets/data/BarJson';
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class TabBar extends Vue {
 
    private tabList: Array<Object> = [];

   // 导航跳转
    private goToURL(URL?: string) {
    }
 
    created () {
        this.tabList = BarJson.tabLIst;
    }
}
</script>

<style scoped>
    .tab_bar{
        display: flex;
        width: 100%;
        height: 45px;
        line-height: 45px;
        position: absolute;
        bottom: 0;
        left: 0;
        box-shadow: 1px 2px 10px #d6d6d6;
    }
    .tab_bar>div{
        flex:1;
        height: 45px;
        text-align: center;
    }
</style>