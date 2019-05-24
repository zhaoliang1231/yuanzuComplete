
const state = {
  usercenter: {
    name: 'fsdfsd',
    birth: '2018-08-08',
    email: '1021143788@@.com',
    telphone: 15213277512,
    RecommenderTelephone: 152232404311
  }
}

const mutations = {
  getuser: function (state, user) {
    state.usercenter = user
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
