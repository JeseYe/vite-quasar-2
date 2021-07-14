import { api } from '@/plugins/api'

export const userApi = {
  login: (form) =>
    api.post('/api/login', form, {
      headers: {
        accept: 'application/json',
        'accept-language': 'UTF-8',
        'content-type': 'application/x-www-form-urlencoded'
      }
    }),
  register: (form) => api.post('api/users/registration', form),
  captchaLogin: (form) => api.post('/api/captcha/login', form),
  currentUser: () => api.get('/api/users/current')
}

export const captchaApi = {
  sendCaptchaCode: (contact) => api.post(`/api/captcha/${contact}`)
}
