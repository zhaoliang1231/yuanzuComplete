// 所有请求放到这个文件中导出
//存放请求方法
import sendAxios from './axios'
//获取注册验证码
//callback回调函数传值到调用方法
//data是传入后台的参数
let  getRegisterCode = function (data,callback) {
  sendAxios('post',"/user_sendVerifyCode.action",data).then((res)=>{
    callback(res)
  })
}
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
//购物车查询接口
let getShopcart = function (data,callback) {
  sendAxios('post','/cart_queryCar.tFindByUser.action',data).then((res)=>{
    callback(res)
  })
}
export {
  getRegisterCode,
  getNotices,
  getNoticeDetail,
  getRegister,
  getShopcart
}


