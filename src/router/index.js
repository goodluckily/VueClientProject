//1.配置导入 路由

import VueRouter from 'vue-router'

//懒加载 分包

const  Home = ()=>import('App.vue')

//2.通过 vue.use(插件) 来安装插件
import  Vue from 'vue'
Vue.use(VueRouter);

//1.统称为 全局守卫
//2.路由独享守卫
//3.组建内的守卫

//创建路由对象
const router = new VueRouter({
  //配置路由 和组件之间的映射关系
  routes:[
    {
      path:"",
      // component:Home
      redirect:"/Home"//重新定义到Home 里面去
    },
    {
      path:"/Home",
      component:Home,
      meta:{
        Title:"主页"
      },
      //嵌套路由
      children:[
        {
          //嵌套路由的默认加载
          path: '',
          redirect:'HomeNews'
        },
        {
          //不需要加 '/'
          path:'HomeNews',
          component:HomeNews
        },
        {
          //不需要加 '/'
          path:'HomeMessage',
          component:HomeMessage
        }
      ]
    },
    {
      path:"/About",
      component:About,
      meta:{
        Title: '关于'
      },
      beforeCreate(to,from,next){
        console.log('路由独享守卫');
      }
    },
    {
      path:"/User/:UserId",
      component:User,
      meta:{
        Title: '用户'
      }
    },
    {
      path:'/ProFile',
      component:ProFile,
      meta:{
        Title: '档案'
      }
    }
  ],
  //去掉 hash 模式地址 # 转换为
  mode:"history",
  //自定义 活跃的样式
  linkActiveClass:"active"
})

//前置守卫
//全局设置Title
router.beforeEach( (to,from,next)=> {

  //从from 跳转到 to
  document.title = to.matched[0].meta.Title
  console.log('++++++++++++++');
  next();
  //1.可以判断用户是否登陆
  // 是 直接next();下一个组件
  // 否 直接 next({path:'/login'}) 去登陆里面去 enxt('/login')  两者都行
})

//后置守卫(钩子)
router.afterEach((to,from)=>{
  //现在的路由组件 活跃的路由组件
  console.log('------------');
  console.log(to);
  //上一个 之前的路由组件 上一个获取的组件
  console.log(from);
})

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//将我们的routes 传入Vue实例中
export default router
