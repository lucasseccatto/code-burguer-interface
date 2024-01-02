import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'https://codeburger-api-production-14e1.up.railway.app'
})

apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCodeBurger
