import axios from '../../plugin/axios'
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  namespaced: true,
  mutations: {
    UPDATE_USER (state, ) {

    },
  },
  actions: {
    async login ({ commit, state, dispatch }, payload) {
      try {
        const res = await axios.post('/api/accounts/auth/token/login', payload)
        console.log(res)
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    },
    async signUp ({ commit, state, dispatch }, payload) {
      try {
        const res = await axios.post('/api/accounts/auth/users/', payload)
        console.log(res)
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    },
  }
}