// 所有请求放到这个文件中导出
//存放请求方法
import sendAxios from './axios'
//获取注册验证码
//callback回调函数传值到调用方法
//data是传入后台的参数
let personalData = function (data, callback) {
  sendAxios('post', '/user_queryUserInfoToFont.action', data).then((res) => {
    callback(res)
  })
}
let changepwd = function (data, callback) {
  sendAxios('post', '/user_updateUserPassword.action', data).then((res) => {
    callback(res)
  })
}
let changeData = function (data, callback) {
  sendAxios('post', '/user_updateUserPassword.action', data).then((res) => {
    callback(res)
  })
}
let receivingAddress = function (data, callback) {
  sendAxios('post', '/yuanzu/address_queryAllAddressByUserId.action', data).then((res) => {
    callback(res)
  })
}
let addAddress = function (data, callback) {
  sendAxios('post', '/address_addAddress.action', data).then((res) => {
    callback(res)
  })
}
let orderLists = function (data, callback) {
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
  orderLists
}
