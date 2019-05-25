
const state = {
  userAddress: [{
    'userId': '1212',
    'addrName': '成才',
    'addrPhone': '15213244522',
    'addrAddress': 'asdgasuhfdtadvgausvd',
    'addrPostcode': '400900'
  },
  {
    'userId': '1212',
    'addrName': '大江',
    'addrPhone': '15213244522',
    'addrAddress': 'asdgasuhfdtadvgausvd',
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
