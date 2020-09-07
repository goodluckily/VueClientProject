
const path = require('path');//引入path模块
function resolve(dir){ 
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports={
    devServer:{
        overlay:{
            warnings:false,
            errors:false
        },
        proxy:{
            "/api":{
                target:"www.baidu.com",//url 地址
                changeOrigin:true,//换一个同源策略
                ws:true,
                secure:false,//https 的检查 关闭
                //重写路径
                pathRewrite:{
                    "^/api":""
                }

            }
        }
    },
    lintOnSave:false,
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))
        .set('public',resolve('./public'))
        .set('static',resolve('./static'))
        .set('utils',resolve('./src/utils')) //set第一个参数：设置的别名，第二个参数：设置的路径
    }
}