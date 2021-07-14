import router from 'src/router'
import axios from 'axios'

import errorMsgs from '@/lang/lang.js'
import { LocalStorage, Notify } from 'quasar'

const parseError = (result) => {
  console.log('parseError', result)
  if (result.status === 401) {
    localStorage.setItem('lastUrl', router.currentRoute.fullPath)
    setTimeout(() => {
      router.push({
        name: 'Login',
        params: { redirect: router.currentRoute.fullPath }
      })
    }, 1000)
  } else {
    Notify.create({
      type: 'warning',
      position: 'top',
      message:
        errorMsgs[result.message] || errorMsgs[result.code] || errorMsgs['defaultErrorMessage']
    })
  }
}
const api = axios.create({})

api.interceptors.request.use((req) => {
  const accessToken = LocalStorage.getItem('User/accessToken') || {}
  console.log(accessToken)
  if (accessToken.tokenValue) {
    req.headers.Authorization = 'Bearer ' + accessToken.tokenValue
  }
  return req
})
// 响应拦截
api.interceptors.response.use(
  (res) => {
    let result = res.data || {}
    if (result.status === 'fail') {
      parseError(result)
    }
    return result || { data: {} }
  },
  (err) => {
    const result = err.response
    parseError(result)
    return Promise.reject(result)
  }
)

export { api, axios }
