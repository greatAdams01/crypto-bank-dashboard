import router from '../../router'
import axios from '../../plugin/axios'
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  namespaced: true,
  mutations: {
    UPDATE_USER_INFO (state, payload) {
      const { firstname, lastname, email, phone, sex, occupation } = payload
      state.user.firstname = firstname
      state.user.lastname = lastname
      state.user.email = email
      state.user.phone = phone
      state.user.sex = sex
      state.user.occupation = occupation
    }
  },
  actions: {
    async updateUserInfo ({ commit }, payload) {
      try {
        const res = await axios.put('/accounts/auth/users/me', payload)
        commit('UPDATE_USER_INFO', res.data)
        toast.success('Update sucessful')
      } catch (error) {
        toast.error(error.message)
      }
    },
    async updatePassword ({commit}, payload) {
      try {
        const res = await axios.post('/accounts/auth/users/set_password/', payload)
        toast.success('Update sucessful')
      } catch (error) {
        toast.error(error.message)
      }
    },
    async getBalance () {
      try {
        const res = await axios.get('/accounts/balance/')
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}