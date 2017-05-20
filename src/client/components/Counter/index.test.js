// Vue library
import Vue from 'vue'

// My library
import Counter from './'
import store from '../../store'

const counterWrapper = new Vue({
  store,
  components: {
    injection: Counter,
  },
  render () {
    return (
      <div><injection></injection></div>
    )
  },
}).$mount()

const counterClass = '.__container__component__-counter'

describe('the counter', () => {
  it('should have two divs', () => {
    expect(counterWrapper.$el.querySelectorAll('div')).toHaveLength(2)
  })

  it('one div should have the container class', () => {
    expect(counterWrapper.$el.querySelectorAll(counterClass)).toHaveLength(1)
  })

  it('the inner div should contain the count', (done) => {
    store.state.counter.count = 6
    const $parentDiv = counterWrapper.$el.querySelector(counterClass)

    Vue.nextTick().then(() => {
      expect($parentDiv.querySelector('div').textContent).toBe('6')
      done()
    })
  })
})
