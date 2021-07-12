import { api } from '@/plugins/api'

export const contentApi = {
  create: (obj) => api.post('/api/contents', obj),
  get: (id) => api.get(`/api/contents/${id}`),
  search: (params) => api.post(`/api/contents/search`, params)
}
