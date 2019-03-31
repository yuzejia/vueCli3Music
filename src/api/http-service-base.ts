import InSearch from '@/core/object/in-search'
export interface HttpServiceBase{

    // 搜索歌单
    getSeach(params: InSearch): any;

    // 获取 歌单
    getSongLIst(params: any): any;

    // 获取 歌单
    getSongLrc(url: string): any;

    getSongDetails(id: string): any;
}