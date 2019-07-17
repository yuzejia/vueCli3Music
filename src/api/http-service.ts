import  axios  from 'axios';

  // 获取随机整数
  const getRandom = '?v=' + Math.floor(Math.random() * 10000000000000000 + 1);

  axios.defaults.timeout = 5000;
  axios.defaults.baseURL ='https://api.bzqll.com'; //填写域名//http request 拦截器
  
  axios.interceptors.request.use(  config => {
      config.data = JSON.stringify(config.data);
      config.headers = {      
          'Content-Type':'application/x-www-form-urlencoded'
      }    
      return config
    },
    error => {    
        return Promise.reject(error);
    }
  );//响应拦截器即异常处理
  axios.interceptors.response.use(response => {    
      return response
  }, err => {    
    if (err && err.response) {      
      switch (err.response.status) {        
          case 400:           
           window.console.log('错误请求')          
           break;        
           case 401:            
           window.console.log('未授权，请重新登录')          
           break;        
           case 403:          
           window.console.log('拒绝访问')          
           break;        
           case 404:          
           window.console.log('请求错误,未找到该资源')          
           break;        
           case 405:          
           window.console.log('请求方法未允许')          
           break;        
           case 408:          
           window.console.log('请求超时')          
           break;        
           case 500:          
           window.console.log('服务器端出错')          
           break;        
           case 501:          
           window.console.log('网络未实现')          
           break;        
           case 502:          
           window.console.log('网络错误')          
           break;        
           case 503:          
           window.console.log('服务不可用')          
           break;        
           case 504:          
           window.console.log('网络超时')          
           break;    
           case 505:          
           window.console.log('http版本不支持该请求')          
           break;        
           default:         
           window.console.log(`连接错误${err.response.status}`)
        }
      } else {      
        window.console.log('连接到服务器失败')
      }    
      return Promise.resolve(err.response)
  })/**
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */
  export function fetch(url: string,params={}){  return new Promise((resolve,reject) => {
      axios.get(url,{      params:params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
    })
  }/**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */
   export function post(url: string,data = {}){   return new Promise((resolve,reject) => {
       axios.post(url,data)
            .then(response => {
              resolve(response.data);
            },err => {
              reject(err)
            })
     })
   } /**
   * 封装patch请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  export function patch(url: string,data = {}){  return new Promise((resolve,reject) => {
      axios.patch(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  } /**
   * 封装put请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  export function put(url: string,data = {}){  return new Promise((resolve,reject) => {
      axios.put(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }
  
  
  
export class HttpService{

    // get请求
  public static get(url: string,paramObj: {} | undefined): object | any {
        return fetch(url + getRandom,paramObj)
    }

     // get请求
  public static post(url: string,paramObj: {} | undefined): object | any {
        return post(url + getRandom,paramObj)
}
}



