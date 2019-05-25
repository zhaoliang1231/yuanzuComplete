
const state = {
  orderlists: {
    address: 'adasd',
    orderbId: 1212,
    benginTime: 1557331200000,
    orderbNo: 1008611
  }
}

const mutations = {
  getorder: function (state, orderlist) {
    state.orderlist = orderlist
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
