import NoInfoComponents from './NoInfo.vue';

const NoInfo = {
    install: function (Vue: any) {
        Vue.component('NoInfo', NoInfoComponents)
    }
}

export default NoInfo;