import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import user from './user'
import orderlist from './orderlist'
import userAddress from './userAddress'
import collect from './collect'
import order from './order'
import History from './History'
Vue.use(Vuex);
const state = {
  showFooter:true,
  changableNum:0
}

const store = new Vuex.Store({
  state,
  modules: {
    cart: cart,
    user,
    userAddress,
    orderlist,
    order,
    collect,
    History
  }
})
export default store
