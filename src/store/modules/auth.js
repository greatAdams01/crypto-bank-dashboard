import router from '../../router'
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
        const res = await axios.post('/accounts/auth/token/login', payload)
        const token = res.data.auth_token
        axios.defaults.headers.common['Authorization'] = token ? `Token ${token}` : ''
        localStorage.setItem('token', JSON.stringify(token))
        const userInfo = await axios.get('/accounts/auth/users/me')
        const data = { ...userInfo.data, token}
        commit('UPDATE_USER_STATE', data, { root: true })
        toast.success(`Welcome ${data.firstname}`)
        router.push('/')
      } catch (error) {
        // console.log(error)
        toast.error(error.message)
      }
    },
    async signUp ({ commit, state, dispatch }, payload) {
      try {
        const res = await axios.post('/accounts/auth/users/', payload)
        toast.success('Successful! login..')
        router.push('/auth/login')
      } catch (error) {
        // console.log(error)
        toast.error(error.message)
      }
    },
  }
}