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
//购物车查询接口
let getShopcart = function (data,callback) {
  sendAxios('post','/cart_queryCartFindByUser.action',data).then((res)=>{    callback(res)
  })
}
//购物车商品数量修改
let changeNunbers = function (data,callback) {
  sendAxios('post','/cart_updateGoodsToCart.action',data).then((res)=>{
    callback(res)
  })
}
//删除购物车商品
let deleteShop = function (data,callback) {
  sendAxios('post','/cart_deleteGoodsToCart.action',data).then((res)=>{
    callback(res)
  })
}
//手机证码接口
let getPhoneCode = function (data,callback) {
  sendAxios('post','/user_sendNoteCode.action',data).then((res)=>{
    callback(res)
  })
}
//验证码接口
let getRegisterCode = function (data,callback) {
  sendAxios('post','/user_sendVerifyCode.action',data).then((res)=>{
    callback(res)
  })
}
//登录接口
let getLogin = function (data , callback) {
  sendAxios('post','/user_loginUser.action',data).then((res)=>{
    callback(res)
  })
}
// let isLogin = function (data , callback) {
//   sendAxios('post','/user_loginUser.action',data).then((res)=>{
//     callback(res)
//   })
// }
//详情页收藏按钮接口
let storeCollet = function (data , callback) {
  sendAxios('post','/user_loginUser.action',data).then((res)=>{
    callback(res)
  })
}
//详情页接口
let getDetail = function (data,callback) {
  sendAxios('post','/goodsinfo_queryGoodsFindById.action',data).then((res)=>{
    callback(res)
  })
}
//评论接口
let getEvaluate = function (data,callback) {
  sendAxios('post','/comments_queryCommentsToFont.action',data).then((res)=>{
    callback(res)
  })
}
//评论添加接口
let addEvaluate = function (data,callback) {
  sendAxios('post','/comments_addComments.action',data).then((res)=>{
    callback(res)
  })
}
//添加购物车
let getAddCar = function (data,callback) {
  sendAxios('post','/cart_addGoodsToCart.action',data).then((res)=>{
    callback(res)
  })
}
//支付订单
let orderPay = function (data,callback) {
  sendAxios('post','/orderb_addOrderb.action',data).then((res)=>{
    callback(res)
  })
}

export {
  getNotices,
  getNoticeDetail,
  getRegister,
  getRegisterCode,
  getShopcart,
  getPhoneCode,
  getLogin,
  storeCollet,
  changeNunbers,
  getDetail,
  getAddCar,
  getEvaluate,
  addEvaluate,deleteShop,
  orderPay}


