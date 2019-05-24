
const state = {
  cartLists: [{
      imgs: ['/static/img/100001433_M.ea439af.jpg'],
      goodsId: 8,
      goodsPrice: 999.00,
      goodsName: "黄川的测试提货券6",
      goodsNum: 1
    },
    {
      imgs:['/static/img/100001433_M.ea439af.jpg'],
      goodsId:8,
      goodsPrice:999.00,
      goodsName:"黄川的测试提货券6",
      goodsNum:1
    },
    {
      imgs:['/static/img/100001433_M.ea439af.jpg'],
      goodsId:8,
      goodsPrice:999.00,
      goodsName:"黄川的测试提货券6",
      goodsNum:1
    },
    {
      imgs:['/static/img/100001433_M.ea439af.jpg'],
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
