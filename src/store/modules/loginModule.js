const state = {
  loginState: false
}
const mutations = {
  loginS: state => {
    localStorage.setItem('loginState', 'true')
    state.loginState = true
  },
  logoutS: state => {
    localStorage.removeItem('loginState')
    state.loginState = false
  }
}
const actions = {
  init (context) {
    if ((localStorage.getItem('loginState')) === 'true') {
      context.commit('loginS')
      // TODO 服务端校验登陆
    } else {
      context.commit('logoutS')
    }
  }
}
export default {
  state,
  mutations,
  actions
}
