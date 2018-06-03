const state = {
  loginState: false
}
const mutations = {
  loginS: state => (state.loginState = true),
  logoutS: state => (state.loginState = false)
}
export default {
  state,
  mutations
}
