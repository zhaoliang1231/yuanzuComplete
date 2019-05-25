//封装ajax请求

import {api} from './api'

import axios from 'axios'

import qs from 'qs'

/*
*axios 再次封装ajax请求 使用promise再次封装
*params
*methods 请求类型
*url 请求地址
*data 发送的数据
 */
function sendAxios(methods ,url,data = {}) {
  return new Promise((resolve,reject)=>{
    axios({
      method: methods,
      url: api + url + '?' + qs.stringify(data),
      // data: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res)=>{
      if (res.data.message == "success"){
        resolve(res.data)
      }else{
        console.log('请求失败')
      }
    }).catch((err)=>{
      console.log('网络错误')
    })
  })
}

export default sendAxios
