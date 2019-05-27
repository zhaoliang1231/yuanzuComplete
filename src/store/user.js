
const state = {
  usercenter: {
    'registTime': 1557331200000,
    'userPhone': '13559273915',
    'userPwd': '123456',
    'refPhone': '1008611',
    'userEmail': '31283656@qq.com',
    'id': 13,
    'state': 0,
    'userBirthday': 1556899200000
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
