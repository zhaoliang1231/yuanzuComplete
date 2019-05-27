// 所有请求放到这个文件中导出
//存放请求方法
import sendAxios from './axios'
//获取注册验证码
//callback回调函数传值到调用方法
//data是传入后台的参数
// 个人资料
let personalData = function (data, callback) {
  sendAxios('post', '/user_queryUserInfoToFont.action', data).then((res) => {
    callback(res)
  })
}
// 修改密码
let changepwd = function (data, callback) {
  sendAxios('post', '/user_updateUserPassword.action', data).then((res) => {
    callback(res)
  })
}
// 修改个人资料
let changeData = function (data, callback) {
  sendAxios('post', '/user_updateUserPassword.action', data).then((res) => {
    callback(res)
  })
}
// 收货地址
let receivingAddress = function (data, callback) {
  sendAxios('post', '/yuanzu/address_queryAllAddressByUserId.action', data).then((res) => {
    callback(res)
  })
}
// 添加地址
let addAddress = function (data, callback) {
  sendAxios('post', '/address_addAddress.action', data).then((res) => {
    callback(res)
  })
}
// 订单列表
let listsorder = function (data, callback) {
  sendAxios('post', '/orderb_queryOrderbFindByUser.action', data).then((res) => {
    callback(res)
  })
}

export {
  personalData,
  changepwd,
  changeData,
  receivingAddress,
  addAddress,
  listsorder
}
