// Vue library
import Vue from 'vue'

// My library
import App from './'
import router from '../../../test/router'
import store from '../../store'

const Constructor = Vue.extend(App)
const myApp = new Constructor({
  router,
  store,
}).$mount()

describe('the app component', () => {
  it('should have the correct root properties', done => {
    Vue.nextTick(() => {
      expect(myApp.$el.className).toBe('page')
      expect(myApp.$el.id).toBe('app')
      done()
    })
  })

  const navBarClass = '.__container__component__-nav-bar'
  it('should contain a nav bar', done => {
    Vue.nextTick(() => {
      const $navBar = myApp.$el.querySelector(navBarClass)
      expect($navBar).toBeTruthy()
      done()
    })
  })

  it('should contain the stubbed comp at the default route', done => {
    Vue.nextTick(() => {
      expect(myApp.$el.querySelector('#test-component')).toBeTruthy()
      done()
    })
  })
})
