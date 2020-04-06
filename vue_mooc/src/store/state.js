const state = {
  appName: 'GengCourse',
  isLogin: true,
  userInfo: {},
  token: '',
  // 轮播图
  banner: [],
  // 轮播图左侧导航栏
  bannerNav: [],
  // 首页课程列表
  homeCourses: {
    // 今日秒杀
    'JRMS': [],
    // 计算机
    'JSJ': [],
    // TED
    'TED': [],
    // 商业财经
    'SYCJ': [],
    // 生活百科
    'SHBK': []
  }
}

export default state