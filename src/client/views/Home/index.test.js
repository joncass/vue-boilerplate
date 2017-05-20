// Vue library
import Vue from 'vue'

// My library
import Home from './'
import wrapper from '../../../test/wrapper'

const homeWrapper = wrapper(Home)

describe('The home page', () => {
  it('has only one child', (done) => {
    Vue.nextTick().then(() => {
      expect(homeWrapper.$el.children).toHaveLength(1)
      done()
    })
  })

  it('contains a counter', (done) => {
    Vue.nextTick().then(() => {
      const counterClass = '.__container__component__-counter'
      expect(homeWrapper.$el.querySelector(counterClass)).toBeTruthy()
      done()
    })
  })
})
