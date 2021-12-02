import { AxiosInstance } from 'axios'
import { loginApi } from './login-api'

type ApiName = 'loginApi'

export const getApi = (apiName: ApiName): AxiosInstance => {
  const apiOptions = {
    loginApi: loginApi()
  }

  return apiOptions[apiName]
}