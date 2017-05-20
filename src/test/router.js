// Vue library
import Vue from 'vue'
import Router from 'vue-router'

// My library
import component from './component'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'component',
      component: component,
    },
  ],
})

export default router
