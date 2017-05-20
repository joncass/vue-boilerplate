// Vue
import Vue from 'vue'
import Vuex from 'vuex'

// My library
import counter from './modules/counter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter,
  },
})

export default store
