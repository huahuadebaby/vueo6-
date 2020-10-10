// 导入单文件组件进行配置路由
import List from '../views/list.vue'
import Login from '../views/login.vue'
import User from '../views/user.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

// vue中要使用vue插件得用到vue.use
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/list' },
    { path: '/list', component: List },
    { path: '/login', component: Login },
    { path: '/user', component: User }
  ]
})
// 将路由导出
export default router
