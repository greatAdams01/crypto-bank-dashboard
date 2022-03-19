import axios from 'axios'

axios.defaults.baseURL = 'https://vicsites.herokuapp.com'
const localToken = localStorage.getItem('token')
const token = JSON.parse(localToken)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

axios.defaults.headers.common['Authorization'] = token ? `Token ${token}` : ''

export default axios