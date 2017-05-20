// Vue library
import Vue from 'vue'
import Router from 'vue-router'

// My library
import About from '../views/About'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
  ],
})
