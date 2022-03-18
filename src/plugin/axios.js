import axios from 'axios'

axios.defaults.baseURL = 'http://vicsites.herokuapp.com'
const token = localStorage.getItem('token')

axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : ''

export default axios