import { HttpServiceBase } from '@/api/http-service-base';
import { HttpService } from './http-service';
import InSearch from '@/core/object/in-search'
import Info from '@/core/object/info';
export default class HttpServiceProry {
   private static HTTP: string = 'https://v1.itooi.cn/music/tencent'; // 服务其地址 tencent 腾讯

   constructor() {
   }

   private static num: number = 0; // 处理 连续频繁发送二次请求
   private static success: string = 'SUCCESS'; // 成功状态
   private static messageErr: string = '别急正在为你努力加载~'; // 成功状态

   // 定义相关接口
   private static SONG_LIST: string = '/songList'; // 获取歌单
   private static SEARCH: string ='/search'; // 获取歌单
   private static SONG: string =  '/song'; // 获取歌单
   private static details: string = '/url'


   /**
    * 公共GET 请求
    */


   
   //清楚 重复请求
   private static init() {
      setTimeout(() => {
         this.num = 0
      }, 500)
   }

   private static getHttp(url: string, params?: any): any {
      this.num++;

      return new Promise((resolve, reject) => {
         HttpServiceProry.num > 1 ?
            reject(HttpServiceProry.messageErr) :
            HttpService.get(this.HTTP + url, params)
            .then((res: any) => {
               HttpServiceProry.init()
               res.result === HttpServiceProry.success ? resolve(res.data) : reject(res.msg);
            })
            .catch((error: any) => {
               HttpServiceProry.init()
               reject(error);
            })
      })
   }


   /**
    * --------------------------------------------------------------------------------------
    */

   // 获取 歌单
   public static getSongLIst(params: any): any {
      return HttpServiceProry.getHttp(HttpServiceProry.SONG_LIST, params)

   }
      // 获取 歌单
   public static getSongLrc(url: string): any {
   return HttpServiceProry.getHttp(url)

   }

   // 搜索 歌单
   public static getSeach(params: InSearch): any {
      const inSearch: InSearch = new InSearch();
      inSearch.key = '579621905'
      inSearch.s = params.s;
      inSearch.type = params.type;
      inSearch.limit = '30';
      inSearch.offset = '0';
      return HttpServiceProry.getHttp(HttpServiceProry.SEARCH, inSearch)
   }

   // 搜索 歌单
   public static getSongDetails(id: string): any {
      const info = new Info();
      info.key = '579621905'
      info.id = id;
      return HttpServiceProry.getHttp(HttpServiceProry.SONG, info)
   }

}


