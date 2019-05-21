// 所有请求放到这个文件中导出
// 存放请求方法
import sendAxios from './axios'

//首页轮播图
let homeBanner = function (callback) {
  sendAxios('post', '/banner_querBannerShow.action').then((res) => {
    callback(res)
  })
}
//全部商品菜单
let goodstype = function (callback) {
  sendAxios('post', '/goodstype_querAllgoodstypeShow.action').then((res) => {
    callback(res)
  })
}

export {
  homeBanner,
  goodstype
}
