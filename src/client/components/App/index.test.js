// Vue library
import Vue from 'vue'
import Router from 'vue-router'

// My library
import App from './'

Vue.use(Router)

const Constructor = Vue.extend(App)
const myApp = new Constructor().$mount()

describe('The app component', () => {
  it('has the correct id', (done) => {
    expect(myApp.$el.id).toBe('app')
  })
})
