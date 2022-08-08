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


1.首先在git'hub上创建一个仓库

2.得到 仓库的地址

2.1在指定文件下 文件下
cmd--> git clone 仓库地址

--例子 git clone https://github.com/goodluckily/suppermailStore.git


2.2得到文件提交状态
cmd-->git status

2.3 开始提交
cmd-->git commit -m '本次提交的说明'

2.4 最后往gitHub仓库上提交
cmd-->git push


--邮件 名称的错误 需要重新设置的指令

cmd--> git config --global user.name "username"

cmd--> git config --global user.email "email"


---代理的错误指令

cmd--> git config --global http.proxy http://127.0.0.1:1080


取消代理：

cmd--> git config --global --unset http.proxy 


--每次修改文件后再次提交

cmd--> git add git初始体验教程.txt     --这里是文件名称

cmd--> git commit -m '说明'

cmd--> git config --global --unset http.proxy 

cmd--> git push


Git-提交时On branch master Your branch is up to date with ‘origin/master’. nothing to commit, worki…

On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean

原因：
版本分支的问题
解决方法：

新建一个分支
$ git branch newbranch  


2. 检查分支是否创建成功

$ git branch 

会有如下提示（前面的*代表的是当前你所在的工作分支）

3. 切换到你的新分支

$ git checkout newbranch


如果不放心，还可以 $ git branch确认下

将你的改动提交到新分支上
$ git add . 
$ git commit -m "newbranch"


然后git status检查是否成功

5. 切换到主分支

$ git checkout master 
//切换到dev
$ git checkout dev 


6. 将新分支提交的改动合并到主分支上

$ git merge newbranch 
1


push代码
$ git push -u origin master
1

8. 可能会提示你输入用户名跟密码，输入对应的用户名跟密码即可


删除这个分支
$ git branch -D newbranch



---本地 获取最新的仓库代码的方式

(推荐方法)

//查询当前远程的版本
$ git remote -v

//获取最新代码到本地(本地当前分支为[branch]，获取的远端的分支为[origin/branch])
$ git fetch origin master  [示例1：获取远端的origin/master分支]
$ git fetch origin dev [示例2：获取远端的origin/dev分支]

//查看版本差异
$ git log -p master..origin/master [示例1：查看本地master与远端origin/master的版本差异]
$ git log -p dev..origin/dev   [示例2：查看本地dev与远端origin/dev的版本差异]

//合并最新代码到本地分支
$ git merge origin/master  [示例1：合并远端分支origin/master到当前分支]
$ git merge origin/dev [示例2：合并远端分支origin/dev到当前分支]


(不推荐这种方式，因为是直接合并，无法提前处理冲突。)
//查询当前远程的版本
$ git remote -v
//直接拉取并合并最新代码
$ git pull origin master [示例1：拉取远端origin/master分支并合并到当前分支]
$ git pull origin dev [示例2：拉取远端origin/dev分支并合并到当前分支]



一  ： Windows中

　　① git status  //查看当前代码状态  红色未提交  绿色代表代码在缓存区

　　② git add .   //把所有修改的代码放到缓存区

　　③ git commit -m "修改注明"   //提交代码 注明修改说明

　　④ git push origin (当前分支名)   //提交到远程仓库里面  这时候可以去仓库里面看下代码变化

　　二 ： 在服务器中

　　① 登陆服务器 进入到网站根目录  执行  git clone (远程仓库地址)

　　② 查看当前分支  git branch  如果是master分支 请切换到其他分支测试运行代码  切换到其他分支：git checkout (分支名)

　　③ 执行 git pull origin (当前分支名)  //意思就是把远程仓库代码更新到当前服务器

　　④ 打开网址运行代码----OK!

　　⑤ 确认代码无误，合并到主分支，

　　　　第一步：git checkout master  //把主分支捡出来

　　　　第二部：git pull origin (测试分支名)  //把测试分支上运行无误的代码pull下来

　　　　第三部：打开网址运行代码----OK


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
```------------------------
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
└── README.md                   # 项目文档
```

#### 项目计划周期

> 准备今年搭建一个 Vue的前端后台管理系统  

> 集成权限

> 日志 

> 消息队列

> 任务调度

> ORM

> 微服务

> 以后在补充......











