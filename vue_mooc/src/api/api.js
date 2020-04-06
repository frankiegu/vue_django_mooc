import axios from './axios'
import {urlEncode} from '../lib/tool'

const HOST = '/api/'

// 注册
export const register = (userInfo) => {
  return axios.post(`${HOST}user/`, userInfo)
}

// 登录
export const login = (userInfo) => {
  return axios.post(`${HOST}login/`, userInfo)
}

// 获取用户信息
export const getUserInfo = () => {
  return axios.get(`${HOST}user/`)
}

// 获取轮播图信息
export const getBanner = () => {
  return axios.get(`${HOST}banner/`)
}

// 获取轮播图左侧的导航栏信息
export const getBannerNav = () => {
  return axios.get(`${HOST}banner_nav/`)
}

// 获取课程
export const getCourse = (params) => {
  return axios.get(`${HOST}course/?${urlEncode(params)}`)
}

// 获取课程详尽信息
export const getFullCourse = (courseID) => {
  return axios.get(`${HOST}full_course/${courseID}/`)
}

// 添加课程学习记录
export const addCourseRecord = (course) => {
  return axios.post(`${HOST}course_record/`, {course})
}

// 获取课程学习记录
export const getCourseRecord = (params) => {
  return axios.get(`${HOST}course_record/?${urlEncode(params)}`)
}


// 添加播放记录
export const addPlayRecord = (lesson) => {
  return axios.post(`${HOST}play_record/`, {lesson})
}

// 获取播放记录
export const getPlayRecord = (params) => {
  return axios.get(`${HOST}play_record/?${urlEncode(params)}`)
}




