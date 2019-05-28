import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import user from './user'
import orderlist from './orderlist'
import userAddress from './userAddress'
import History from './History'
import collect from './collect'
Vue.use(Vuex);
const state = {
  showFooter:true,
  changableNum:0
}

const store = new Vuex.Store({
  state,
  modules: {
    cart: cart,
    user: user,
    userAddress: userAddress,
    orderlist: orderlist,
    History
  }
})
export default store
