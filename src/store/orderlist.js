
const state = {
  orderlists: [{
    'address': 'adasd',
    'orderbId': '12123',
    'benginTime': 557331200001,
    'orderbNo': 1008611
  },
  {
    'address': 'adasd',
    'orderbId': '121245',
    'benginTime': 557331200000,
    'orderbNo': 1008611
  }]
}

const mutations = {
  getorder: function (state, orderlist) {
    state.orderlists = orderlist
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
