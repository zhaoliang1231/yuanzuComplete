// 所有请求放到这个文件中导出
// 存放请求方法
import sendAxios from './axios'

// 首页轮播图
let homeBanner = function (callback) {
  sendAxios('post', '/banner_querBannerShow.action').then((res) => {
    callback(res)
  })
}
// 首页顶部全部商品菜单
let AllgoodstypeAndTwo = function (callback) {
  sendAxios('post', '/goodstype_querAllgoodstypeAndTwo.action').then((res) => {
    callback(res)
  })
}
// 元祖新品、热销商品、节庆民俗、元祖卡券
let TitleAll = function (callback) {
  sendAxios('post', '/goodsinfo_queryTitleAll.action').then((res) => {
    callback(res)
  })
}
// 三个大分类
let GoodsinfoFindByType = function (data, callback) {
  sendAxios('post', '/yuanzu/goodsinfo_queryGoodsinfoFindByType.action', data).then((res) => {
    callback(res)
  })
}
// 分类详情
let GoodsInfoMmp = function (data, callback) {
  sendAxios('post', '/goodsinfo_queryGoodsInfoMmp.action', data).then((res) => {
    callback(res)
  })
}
//搜索框
let LikeContext = function (data, callback) {
  sendAxios('post', '/goodsinfo_queryLikeContext.action', data).then((res) => {
    callback(res)
  })
}
export {
  homeBanner,
  GoodsinfoFindByType,
  AllgoodstypeAndTwo,
  TitleAll,
  GoodsInfoMmp,
  LikeContext
}
