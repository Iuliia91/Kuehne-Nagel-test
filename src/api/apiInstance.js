import axios from 'axios'

const apiRequest = axios.create({
  baseURL: 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0',
  timeout: 5000,
})

export default apiRequest
