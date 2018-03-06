import axios from 'axios'

export default {
  login (credentials) {
    return axios.post('http://voluntariat-tortosa.test/api/v1/proxy/oauth/token', credentials)
  }
}