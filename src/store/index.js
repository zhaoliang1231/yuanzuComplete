import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
Vue.use(Vuex);
const state = {
  showFooter:true,
  changableNum:0
}

const store = new Vuex.Store({
  state,
  modules: {
    cart: cart
  }
});
export default store
