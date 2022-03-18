import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import auth from './modules/auth'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})


const store = createStore({
  modules: {
    auth
  },
  plugins: [vuexLocal.plugin]
})

export default store