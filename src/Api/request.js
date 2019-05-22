// 所有请求放到这个文件中导出
//存放请求方法
import sendAxios from './axios'

//callback回调函数传值到调用方法
//data是传入后台的参数
//首页公告接口
let getNotices = function (data,callback) {
    sendAxios('post','/ann_querytitle.action',data).then((res)=>{
      callback(res)
  });
}
//公告详情页接口
let getNoticeDetail = function (data,callback) {
  sendAxios('post','/ann_queryconent.action',data).then((res)=>{
    callback(res)
  })
}
//注册接口
let getRegister = function (data,callback) {
  sendAxios('post','/user_registUser.action',data).then((res)=>{
    callback(res)
  })
}
//注册验证码接口
let getRegisterCode = function (data,callback) {
  sendAxios('post','/user_sendVerifyCode.action',data).then((res)=>{
    callback(res)
  })
}
//手机证码接口
let getPhoneCode = function (data,callback) {
  sendAxios('post','/user_sendNoteCode.action',data).then((res)=>{
    callback(res)
  })
}

export {
  getNotices,
  getNoticeDetail,
  getRegister,
  getRegisterCode,
  getPhoneCode
}


