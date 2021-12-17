import axios from 'axios'

const netClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000
})

netClient.interceptors.request.use(
  (request) => {
    const { accessToken } = localStorage
    if (accessToken) {
      request.headers = {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      }
    }

    return request
  },
  (error) => {
    console.error()
    return Promise.reject(error)
  }
)

export default netClient
