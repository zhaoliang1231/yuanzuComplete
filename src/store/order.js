
const state = {
  orderlists: [{
    'address': '重庆市 南岸区 大红大 决赛的哈斯',
    'orderbId': '1212',
    'benginTime': 557331200001,
    'orderbNo': 1008611
  },
    {
      'address': 'adasd',
      'orderbId': '1212',
      'benginTime': 557331200000,
      'orderbNo': 1008611
    }]
}

const mutations = {
  getorder: function (state, order) {
    state.orderlists = order
  }
}

const actions = {

}

const getters = {
}

export default {
  namespace: true,
  state,
  mutations,
  getters,
  actions
}
