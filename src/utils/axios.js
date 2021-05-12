import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'
const axios = Axios.create({
  baseURL,
  timeout: 20000
})

axios.interceptors.request.use(
  (request) => {
    return request
  },
  (err) => {
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    if (err.response && err.response.data) {
      const msg = err.response.data.message
      ElMessage.error(`${msg}`)
      return 0
    }
    ElMessage.error(`${err}`)
    return Promise.reject(err)
  }
)
export default axios
