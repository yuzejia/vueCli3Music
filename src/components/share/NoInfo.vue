<template>
    <div class="Noinfo animated fadeIn">
        <p>
        <img src="../../assets/img/img-music.png" alt="">
        </p>
        <span class="fs-28">没有信息呦~</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class NoInfo extends Vue {

}
</script>

<style lang="less" scoped>
    .Noinfo{
        text-align: center;
        margin-top: 1.5rem;
    }
</style>