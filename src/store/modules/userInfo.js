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
    UPDATE_DEPOSIT (state, payload) {
      state.depositTx = payload
      console.log(state.depositTx)
    },
    UPDATE_WITHDRAW (state, payload) {
      state.withdrawTx = payload
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
        // Fetch list of coins and balance
        const listCoins = await axios.get('/accounts/coins/')
        const balance = await axios.get('/accounts/balance/')
        // Fetch investment packages
        dispatch('invest/getPackages', null, { root: true })
        // Tranactions
        const deposits = await axios.get('/transactions/deposit/history/')
        const withdraw = await axios.get('/transactions/withdraw/history')
        // Commit them
        // console.log(deposits.data)
        commit('UPDATE_DEPOSIT', deposits.data)
        commit('UPDATE_WITHDRAW', withdraw.data)
        commit('UPDATE_ACCOUNT_BALANCE', balance.data.balance, { root: true })
        commit('UPDATE_COINS_LIST', listCoins.data, { root: true })
      } catch (error) {
        toast.error(error.message)
      }
    },
    logOut ({ commit }) {
      localStorage.removeItem('token')
      commit('UPDATE_USER_STATE', {}, { root: true })
      router.push('/auth/login')
    },
    // Get accountBalance
    async getAccountBalance ({ commit }) {
      try {
        const res = await axios.get('/accounts/balance/')
        commit('UPDATE_ACCOUNT_BALANCE', res.data.balance, { root: true })
      } catch (error) {
        toast.error(error.message)
      }
    },
    // Deposit
    async depositAssets ({ commit, state, dispatch }, payload) {
      try {
        const { data } = await axios.post('/transactions/deposit/', payload)
        toast.success('Deposit sucessful')
        dispatch('getAccountBalance')
        router.push('/')
      } catch (error) {
        toast.error(error.message)
      }
    },
    // Withdraw
    async withdrawAssets ({ commit }, payload) {
      try {
        const res = await axios.post('/transactions/withdraw/', payload)
        console.log(res.data)
        toast.success('Successful')
      } catch (error) {
        toast.error(error.message)
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
        const res = await axios.post('/accounts/userassets/', payload)
        commit('UPDATE_ASSET', payload, { root: true })
        toast.success('Asset created sucessfully')
      } catch (error) {
        toast.error(error.message)
      }
    }
  }
}
