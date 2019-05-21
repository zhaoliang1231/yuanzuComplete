// 所有请求放到这个文件中导出
//存放请求方法
import sendAxios from './axios'
//获取注册验证码
let  getRegisterCode = function (callback) {
  sendAxios('post',"/user_sendVerifyCode.action").then((res)=>{
    callback(res)
  })
}

export {
  getRegisterCode
}


