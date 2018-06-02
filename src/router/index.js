import Vue from 'vue'
import Router from 'vue-router'
import BlogContainer from '../components/BlogContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BlogContainer',
      component: BlogContainer
    }
  ]
})
