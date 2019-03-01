import  { ServerHttp } from './http-service';
import InSearch from '@/core/object/in-search'
export default class ServerApi{

    private static num: number = 0;     // 处理 连续频繁发送二次请求
    private static success = 'SUCCESS'; // 成功状态
    private static messageErr = '别急正在为你努力加载~'; // 成功状态

    private static http = 'https://api.bzqll.com/music/tencent';     // 服务其地址   tencent 腾讯

    // 定义相关接口
    private static SONG_LIST = ServerApi.http + '/songList';         // 获取歌单
    private static SEARCH = ServerApi.http + '/search';              // 获取歌单
    private static SONG = ServerApi.http + '/song';              // 获取歌单


  
    
    // 获取 歌单
    public static getSongLIst(params: any): any {
      return ServerApi.getHttp(ServerApi.SONG_LIST ,params)

    }

   // 搜索 歌单
    public static getSeach(params: InSearch): any {
      const inSearch: InSearch = new InSearch();
      inSearch.key = '579621905'
      inSearch.s = params.s;
      inSearch.type = params.type;
      inSearch.limit = '10';
      inSearch.offset = '0';
     return ServerApi.getHttp(ServerApi.SEARCH, inSearch)
   }

      // 搜索 歌单
    public static getSongDetails(id: string): any {
      const songDetails = {
         key: '',
         id: ''
      }
      songDetails.key = '579621905'
      songDetails.id = id;
      return ServerApi.getHttp(ServerApi.SONG ,songDetails)
   }

   /** 
    * 公共GET 请求
    */ 
 private static getHttp(url: string, params: any): any {
      ServerApi.num ++ ;
      return new Promise((resolve, reject) => {
         ServerApi.num >1?
            reject(ServerApi.messageErr):
            ServerHttp.get(url, params)
            .then((res: any) => {
               ServerApi.init()
               res.result === ServerApi.success? resolve(res.data) : reject(res.msg);
            })
            .catch( (error: any) => {
               ServerApi.init()
               reject(error);
            })
      })
   }

   /** 
    * 清楚 重复请求
    */ 
  private static init() {
      setTimeout(() => {
         ServerApi.num = 0
      }, 500)
   }
}
