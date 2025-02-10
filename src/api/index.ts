import axios, { type AxiosResponse } from "axios"
import { store } from "src/store"
import { onDev } from "src/utils/functions"

const API = axios.create({
  baseURL: process.env["API_HOST"] ?? "http://localhost:3001",
})

API.interceptors.request.use(
  (config) => {
    return config
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

API.interceptors.response.use(
  async (response) => {
    if (onDev()) {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(response)
          reject(new Error("API Request failure!"))
        }, 500)
      })
    } else {
      return response
    }
  },
  async (error) => {
    if (
      error.response !== undefined &&
      [401, 403, 500, 503].includes(error.response.status)
    ) {
      store.dispatch({ type: "session" })
    }
    return await Promise.reject(error)
  }
)

const responseBody = <T>(response: AxiosResponse<T>) => response.data

export const request = {
  post: async <T>(url: string, body: unknown) =>
    await axios.post<T>(url, body).then(responseBody),
}

export const http = {
  get: async <T>(url: string, params?: unknown) =>
    await API.get<T>(url, params ?? {}).then(responseBody),
  post: async <T>(url: string, body: unknown) =>
    await API.post<T>(url, body).then(responseBody),
  put: async <T>(url: string, body: unknown) =>
    await API.put<T>(url, body).then(responseBody),
  delete: async <T>(url: string, params?: unknown) =>
    await API.delete<T>(url, params ?? {}).then(responseBody),
}

export const api = (v?: string) => {
  const defaultVersion = v ?? process.env["API_VERSION"] ?? null
  const version = defaultVersion ?? `/${defaultVersion ?? ""}`

  return {
    get: async <T>(url: string, params?: unknown) =>
      await http.get<T>(`${version}${url}`, params),
    post: async <T>(url: string, params?: unknown) =>
      await http.post<T>(`${version}${url}`, params),
    put: async <T>(url: string, params?: unknown) =>
      await http.put<T>(`${version}${url}`, params),
    delete: async <T>(url: string, params?: unknown) =>
      await http.delete<T>(`${version}${url}`, params),
  }
}
