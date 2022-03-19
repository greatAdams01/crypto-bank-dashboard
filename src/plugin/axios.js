import axios from 'axios'

axios.defaults.baseURL = 'https://vicsites.herokuapp.com'
const token = localStorage.getItem('token')

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : ''

export default axios