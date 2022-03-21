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
    },
    UPDATE_TRANSACTIONS (state, payload) {
      state.transactions = payload
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
    async getAccountDetails ({ commit, state, dispatch }) {
      try {
        // const balance = dispatch('getAccountBalance')
        const res = await axios.get('/investments/packages/')
        const deposits = await axios.get('/transactions/deposit/history/')
        const withdraw = await axios.get('/transactions/withdraw/history')
        // const asset = await axios.get('/accounts/userassets/edit/')
        console.log(deposits.data, withdraw.data, res)
        const txs = deposits.data.concat(withdraw.data)
        commit('UPDATE_TRANSACTIONS', txs)
      } catch (error) {
        console.log(error)
      }
    },
    logOut ({ commit }) {
      localStorage.removeItem('token')
      commit('UPDATE_USER_STATE', {}, { root: true })
      router.push('/auth/login')
    },
    // Get accountBalance
    async getAccountBalance () {
      try {
        const res = await axios.get(' /accounts/balance/')
        return res.data
      } catch (error) {
        console.log(error)
      }
    },
    // Deposit
    async depositassets ({ commit }, payload) {
      try {
        // const res = await axios.post('/transactions/deposit/', payload)
        console.log(payload)
      } catch (error) {
        console.log(error)
      }
    },
    // Withdraw
    async withdrawAssets ({ commit }, payload) {
      try {
        // const res = awiat axios.post('/transactions/withdraw/', payload)
        console.log(payload)
      } catch (error) {
        console.log(error)
      }
    },
    async updateAsset ({ commit, state }, payload) {
      try {
        // If assest exist update data
        if (state.asset) {
          const res = await axios.put('/accounts/userassets/edit/', payload)
          commit('UPDATE_ASSET', payload, { root: true })
          toast.success('Update sucessful')
        }
        const res = await axios.post(' /accounts/userassets/', payload)
        commit('UPDATE_ASSET', payload, { root: true })
        toast.success('Asset created sucessfully')
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
  }
}