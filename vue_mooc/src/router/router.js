import Home from '../views/Home/Home'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login'),
    meta: {
      title: '小耿课堂-登录'
    }
  }, {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register/Register'),
    meta: {
      title: '小耿课堂-注册'
    }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '小耿课堂-首页'
    }
  },
  {
    path: '/search_result/:searchKey',
    name: 'searchResult',
    component: () => import('../views/SearchResult/SearchResult'),
    props: {default: true, sidebar: false},
    meta: {
      title: '小耿课堂 - 搜索结果'
    }
  },
  {
    path: '/full_course/:courseID',
    name: 'fullCourse',
    component: () => import('../views/FullCourse/FullCourse'),
    meta: {
      title: '小耿课堂 - 课程介绍'
    }
  },
  {
    path: '/course_video/:courseID/:chapterID/:lessonID/',
    name: 'courseVideo',
    component: () => import('../views/CourseVideo/CourseVideo'),
    meta: {
      title: '小耿课堂 - 课程播放'
    }
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('../views/Center/Center'),
    redirect: '/center/my_course/',
    meta: {
      title: '小耿课程 - 个人中心'
    },
    children: [
      {
        path: 'my_course',
        component: () => import('../views/Center/MyCourse')
      },
      {
        path: 'my_record',
        component: () => import('../views/Center/MyRecord')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/Error404/Error404'),
    meta: {
      title: '404页面未找到'
    }
  }
]

export default routes
