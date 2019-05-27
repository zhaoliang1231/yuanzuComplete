
const state = {
  collectLists: [{
    'userState': 0/1,
    'imgs': [
      '\\goodsinfoImg\\31.jpg","\\goodsinfoImg\\8 - 副本.jpg'
    ],
    'goodsId': 15,
    'goodsTitle': '朝羽鲜奶蛋糕',
    'goodsName': '寓意良辰美景， 幸福的时刻'
  },
  {
    'userState': 0/1,
    'imgs': [
      '\\goodsinfoImg\\31.jpg","\\goodsinfoImg\\8 - 副本.jpg'
    ],
    'goodsId': 15,
    'goodsTitle': '朝羽鲜奶蛋糕',
    'goodsName': '寓意良辰美景， 幸福的时刻'
  }]
}

const mutations = {
  getcollect: function (state, collectList) {
    state.orderlists = collectList
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
