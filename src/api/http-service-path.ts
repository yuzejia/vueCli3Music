
export default class HttpServicepath {
   private static HTTP: string = 'https://api.bzqll.com/music/tencent'; // 服务其地址 tencent 腾讯

 
    static num: number = 0; // 处理 连续频繁发送二次请求
    static success: string = 'SUCCESS'; // 成功状态
    static messageErr: string = '别急正在为你努力加载~'; // 成功状态

   // 定义相关接口
    static SONG_LIST: string = '/songList'; // 获取歌单
    static SEARCH: string ='/search'; // 获取歌单
    static SONG: string =  '/song'; // 获取歌单
    static details: string = '/url'




}


