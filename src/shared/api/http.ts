import axios, { type AxiosResponse } from 'axios'

import { ApiError } from './api-error'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10_000,
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

http.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (!axios.isAxiosError(error)) {
      return Promise.reject(error)
    }

    const status = error.response?.status
    const isNotFoundResponse = status === 302

    if (isNotFoundResponse) {
      return Promise.resolve({
        data: null,
        status,
        statusText: error.response?.statusText ?? 'Not Found',
        headers: error.response?.headers,
        config: error.response?.config,
        request: error.request,
      } as AxiosResponse)
    }

    const message =
      error.response?.data?.message ??
      error.response?.data?.error ??
      error.message ??
      'Request failed'

    return Promise.reject(new ApiError(message, error.response?.status, error.response?.data))
  },
)
