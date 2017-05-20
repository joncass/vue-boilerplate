// Vue library
import Vue from 'vue'

// My library
import About from './'
import store from '../../store'

const aboutWrapper = new Vue({
  store,
  components: {
    injection: About,
  },
  render () {
    return (
      <div><injection></injection></div>
    )
  },
}).$mount()

describe('The about page', () => {
  it('recommends editing ./src/client', (done) => {
    Vue.nextTick().then(() => {
      expect(aboutWrapper.$el.textContent).toMatch(/edit files.*src\/client/)
      done()
    })
  })

  const url = 'https://github.com/joncass/vue-boilerplate/blob/master/README.md'
  it('links to the source code', (done) => {
    Vue.nextTick().then(() => {
      expect(aboutWrapper.$el.querySelector('a').href).toBe(url)
      done()
    })
  })
})
