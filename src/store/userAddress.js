
const state = {
  userAddress: [{
    'userId': '1212',
    'addrName': '成才',
    'addrPhone': '15213244522',
    'addrAddress': '重庆市 沙坪坝区 西永天街 西科公寓25栋',
    'addrPostcode': '400900'
  },
  {
    'userId': '1212',
    'addrName': '大江',
    'addrPhone': '15213244522',
    'addrAddress': '重庆市 大足区 龙景理想城 四栋',
    'addrPostcode': '400900'
  }]
}

const mutations = {
  getaddress: function (state, userAddress) {
    state.userAddress = userAddress
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
