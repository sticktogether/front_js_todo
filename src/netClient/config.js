import axios from 'axios'

const netClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000
})

export default netClient
