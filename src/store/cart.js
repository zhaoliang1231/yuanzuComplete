import {getShopcart} from "Api/request";

const state = {
  cartLists: [],
  cartlist: [],
  // time: 0
}

const mutations = {
  changeCartLists: function (state, options) {
    let lists = options.lists
    state.cartLists = lists
    // state.time = options.time
  },
  changeListNumber:function (state, goodslist) {
    state.cartLists[goodslist.index].goodsNum = goodslist.num
  },
  chgCartLists: function (state, lists) {
    state.cartlist = lists;
  },
  deleteLists: function (state, lists) {
    state.cartLists = lists;
  },
  removeLists: function (state) {
    state.cartLists = []
  }
}
const actions = {
  getCartLists: function (context, data) {
    getShopcart(data, (res) => {
        context.commit('changeCartLists',{
          lists: res.data,
          // time: new Date().getTime()
        });

    });
  }
}
const getters = {
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
