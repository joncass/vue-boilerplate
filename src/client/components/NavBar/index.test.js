// Vue library
import Vue from 'vue'

// My library
import NavBar from './'
import router from '../../../test/router'
import store from '../../store'

const Constructor = Vue.extend(NavBar)
const myNavBar = new Constructor({
  router,
  store,
}).$mount()

describe('the nav bar component', () => {
  it('should have the correct root properties', (done) => {
    Vue.nextTick(() => {
      expect(myNavBar.$el.className).toBe('__container__component__-nav-bar')
      done()
    })
  })

  it('should contain two children (the router links)', (done) => {
    Vue.nextTick(() => {
      expect(myNavBar.$el.children).toHaveLength(2)
      done()
    })
  })

  it('should have one active router-link', (done) => {
    Vue.nextTick(() => {
      expect(
        myNavBar.$el.querySelectorAll('.router-link-active')
      ).toHaveLength(1)
      done()
    })
  })
})
