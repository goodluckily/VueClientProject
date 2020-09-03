# suppermail

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## git 提交过程看git初体验教程.txt

```
提交的项目文件里面
```

#### 说明

>  本项目主要用于熟悉如何用搭建 架构Vue 项目文件目录 (准备开始作 一个后端管理平台项目)

>  为了方便后期修改使用，模拟数据在页面中，具体修改看下面【强调】

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 w10  Chrome 61

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍



#### 目录结构

## ------public(存放项目的公共文件)
------------------------bash
├── /build/                     # 项目构建(webpack)相关配置
├── /config/                    # 项目开发环境配置
├── /src/                       # 源码目录
│ ├── /assets/                  # 资源文件
│ ├── /assets/img               # 图片文件目录
│ ├── /assets/css               # css样式文件目录 
│ ├── /assets/css\normalize.css # css样式格式统一
│ ├── /common/                  # 存放项目里面公共的Js文件的文件夹
│ ├── /components/              # 公共组件的文件夹
│ ├── /components/common        # 不仅当前项目用到,别的项目也可以复用的(完全公共的)
│ ├── /components/content       # 与当前项目业务相关公共的的文件夹
│ ├── /network                  # axios 网络请求封装的文件夹
| ├── /router/                  # 路由相关的的文件夹
│ ├── /store/                   # Vuex公共状态管理的文件夹
│ ├── /views/                   # 路由组件(页面维度)
│ ├── App.vue                   # 组件入口
│ └── main.js                   # 程序入口
├── /static/                    # 非组件静态资源
├── index.html                  # 页面入口
└── README.md                   # 项目文档

---2020-09-02 lyz



#### 项目计划周期

> 准备今年搭建一个 Vue的前端后台管理系统  

> 集成权限

> 日志 

> 消息队列

> 任务调度

> ORM

> 微服务











