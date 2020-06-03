import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Info from '../components/Info'
import Profile from '../components/Profile'
// 1 引用vue-router
Vue.use(VueRouter)

// 2 创建路由映射表
const routes = [{
    path: '/home',
    component: Home
  },
  {
    path: '/info/:id',
    component: Info
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 3 new 一个VueRouter实例
const router = new VueRouter({
  routes
})

// 4 将创建好的router 导出
export default router