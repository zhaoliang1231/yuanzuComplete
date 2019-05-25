import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import user from './user'
Vue.use(Vuex);
const state = {
  showFooter:true,
  changableNum:0
}

const store = new Vuex.Store({
  state,
  modules: {
    cart: cart,
    user: user
  }
})
export default store
