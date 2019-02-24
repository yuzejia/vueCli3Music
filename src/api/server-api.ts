import  { ServerHttp } from './http-service';

export default class ServerApi{
 
    public static success = 'SUCCESS';

    public static http = 'https://api.bzqll.com/music';    // 服务其地址
    public static SONG_LIST = ServerApi.http + '/netease/songList';         // 获取歌单
    public static SEARCH = ServerApi.http + '/netease/search';         // 获取歌单



    // 获取 歌单
    public static getSongLIst(params: any): any {
      return new Promise((resolve, reject) => {
         ServerHttp.get(ServerApi.SONG_LIST, params)
         .then((res: any) => {
            res.result === ServerApi.success? resolve(res.data) : reject(res.msg);
         })
         .catch( (error: any) => {
            reject(error);
         });
      })

    }

   // 搜索 歌单
   public static getSeach(params: any): any {
      return new Promise((resolve, reject) => {
         ServerHttp.get(ServerApi.SEARCH, params)
         .then((res: any) => {
            res.result === ServerApi.success? resolve(res.data) : reject(res.msg);
         })
         .catch( (error: any) => {
            reject(error);
         });
      })

   }
}
