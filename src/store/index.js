import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import auth from './modules/auth'
import mutations from './mutations'
import state from './state'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})




const store = createStore({
  modules: {
    auth
  },
  state,
  mutations,
  plugins: [vuexLocal.plugin]
})

export default store