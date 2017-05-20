// Vue library
import Vue from 'vue'

// My library
import Home from './'
import store from '../../store'

const homeWrapper = new Vue({
  store,
  components: {
    injection: Home,
  },
  render () {
    return (
      <div><injection></injection></div>
    )
  },
}).$mount()

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
