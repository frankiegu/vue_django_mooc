import axios from 'axios'
import store from '../store'
import {isValidToken, saveTokenTime} from '../lib/tool'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (!isValidToken()) {
      localStorage.removeItem('token')
      localStorage.removeItem('token_end_time')
    } else {
      config.headers.Authorization = `JWT ${localStorage.getItem('token')}`
    }

    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log(error.response)
          // 401 清除token信息并跳转到登录页面
          localStorage.removeItem('token')
      }
    }
    return Promise.reject(error.response.data)
  }
)

export default axios