import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import auth from './modules/auth'
import state from './state'
import mutations from './mutations'
import getters from './getters'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = createStore({
  modules: {
    auth
  },
  state,
  mutations,
  getters,
  plugins: [vuexLocal.plugin]
})

export default store