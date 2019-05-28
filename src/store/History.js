
const state = {
  record: []
}

const mutations = {
  Record (state, val) {
    let arr = state.record
    let bool = true
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        bool = false
        return
      }
    }
    if (val !== '' && bool) {
      state.record.unshift(val)
    }
    if (state.record.length > 5) {
      state.record.splice(-1, 1)
    }
  }
}

const actions = {
  addRecord (context, val) {
    context.commit('Record', val)
  }
}

const getters = {
  getRecord () {
    return state.record
  }
}
export default {
  namespace: true,
  state,
  mutations,
  getters,
  actions
}
