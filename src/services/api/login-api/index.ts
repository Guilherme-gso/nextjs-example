import axios, { AxiosInstance } from 'axios'

export const loginApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
  })

  return api
}