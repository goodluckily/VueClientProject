//1.配置导入 路由

import VueRouter from 'vue-router'

//懒加载 分包
//@ 表示 src
const  login = ()=>import('@/views/login/login.vue')
const  home = ()=>import('@/views/home/home.vue')

//2.通过 vue.use(插件) 来安装插件
import  Vue from 'vue'
Vue.use(VueRouter);

//1.统称为 全局守卫
//2.路由独享守卫
//3.组建内的守卫

var routes = [
  {
    name:"login",
    path:"/login",
    component: login,
  },
  {
    name:"home",
    path:"/",
    component: home,
  },
]

//创建路由对象
const router = new VueRouter({
  //配置路由 和组件之间的映射关系
  routes,
  //去掉 hash 模式地址 # 转换为
  mode:"history",
  //自定义 活跃的样式
  linkActiveClass:"active"
})

//将我们的routes 传入Vue实例中
export default router
