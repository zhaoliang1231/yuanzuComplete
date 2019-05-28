
const state = {
  cartLists: [
    {
      imgs: ['/src/static/img/100001433_M.ea439af.jpg'],
      goodsId: 8,
      goodsPrice: 999.00,
      goodsName: "黄川的测试提货券6",
      goodsNum: 2
    },
    {
      imgs:['/src/static/img/100001433_M.ea439af.jpg'],
      goodsId:8,
      goodsPrice:999.00,
      goodsName:"黄川的测试提货券6",
      goodsNum:1
    },
    {
      imgs:['/src/static/img/100001433_M.ea439af.jpg'],
      goodsId:8,
      goodsPrice:999.00,
      goodsName:"黄川的测试提货券6",
      goodsNum:1
    },
    {
      imgs:['/src/static/img/100001433_M.ea439af.jpg'],
      goodsId:8,
      goodsPrice:999.00,
      goodsName:"黄川的测试提货券6",
      goodsNum:1
    },
  ]
}

const mutations = {
  changeCartLists: function (state, lists) {
    state.cartLists = lists
  },
  changeListNumber:function (state, goodslist) {

    state.cartLists[goodslist.index].goodsNum = goodslist.num
  }
}

const actions = {

}

const getters = {
  //{number: , price}
  total: function(state) {
    let number = 0, price = 0, lists = state.cartLists;
    for(let i = 0;i<lists.length;i++ ) {
      number += lists[i].goodsNum;
      price += lists[i].goodsPrice*lists[i].goodsNum
    }
    return {
      number,
      price
    }
  }
}


export default {
  namespace: true,
  state,
  mutations,
  getters,
  actions
}
