// 所有请求放到这个文件中导出
//存放请求方法
import sendAxios from './axios'
//获取注册验证码
//callback回调函数传值到调用方法
//data是传入后台的参数
// let  getRegisterCode = function (data,callback) {
//   sendAxios('post',"/user_sendVerifyCode.action",data).then((res)=>{
//     callback(res)
//   })
// }

export {
  // getRegisterCode
}


