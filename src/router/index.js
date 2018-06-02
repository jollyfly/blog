import Vue from 'vue'
import Router from 'vue-router'
import BlogContainer from '../components/BlogContainer'
import Introduction from '../components/Introduction'
import ManageMenu from '../components/ManageMenu'
import ManageContainer from '../components/ManageContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        left: Introduction,
        right: BlogContainer
      }
    },
    {
      path: '/manage',
      components: {
        left: ManageMenu,
        right: ManageContainer
      }
    }

  ]
})
