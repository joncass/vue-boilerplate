// Vue library
import Vue from 'vue'

// My library
import store from '../client/store'

const componentBuilder = (component) => {
  return new Vue({
    store,
    components: {
      injection: component,
    },
    render () {
      return (
        <div><injection></injection></div>
      )
    },
  }).$mount()
}

export default componentBuilder
