import router from '../../router'
import axios from '../../plugin/axios'
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  namespaced: true,
  actions: {
    async getPackages ({ commit, state }) {
      try {
        const res = await axios.get('/investments/packages/')
        commit('UPDATE_PACKAGES', res.data, { root: true })
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    },
    async purchasePackage ({ commit }, payload) {
      try {
        const res = await axios.post('/investments/invest/', payload)
        toast.success('Purchase successful')
      } catch (error) {
        toast.error(error.message)
      }
    }
  }
}