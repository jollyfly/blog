import Vuex from 'vuex'
import Vue from 'vue'
import loginModule from './modules/loginModule'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    loginModule
  }
})
