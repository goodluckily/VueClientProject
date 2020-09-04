/**
 * 时间戳
 * @param {*} timestamp  时间戳
 */
const timestampToTime = (timestamp) => {
    let date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-'
    let M =
        (date.getMonth() + 1 < 10 ?
            '0' + (date.getMonth() + 1) :
            date.getMonth() + 1) + '-'
    let D =
        (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    let h =
        (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    let m =
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
        ':'
    let s =
        date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return Y + M + D + h + m + s
};
/**
 * 存储localStorage
 */
const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 设置cookie
 **/
function setCookie(name, value, day) {
    let date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value + ';expires=' + date;
};

/**
 * 获取cookie
 **/
function getCookie(name) {
    let reg = RegExp(name + '=([^;]+)');
    let arr = document.cookie.match(reg);
    if (arr) {
        return arr[1];
    } else {
        return '';
    }
};

/**
 * 删除cookie
 **/
function delCookie(name) {
    setCookie(name, null, -1);
};


// import Vue from 'vue'
/**
 * 定义全局函数，或者单独引用
 * */

/**
 * 微信浏览器中设置对应页面的标题
 * 解决：IOS微信浏览器中用document.title 设置标题无效
 * */
const setTitle = (title) => {
    var body = document.getElementsByTagName('body')[0];
    document.title = title;
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://sh.51youdian.com/Public/Index/images/navbar/nav-logo.png");
    iframe.setAttribute("style", "display:none");
    iframe.addEventListener('load', function() {
        setTimeout(function() {
            try{
                iframe.removeEventListener('load');
            }catch (err){}
            document.body.removeChild(iframe);
        }, 0);
    });
    try{
        document.body.appendChild(iframe);
    }catch (err){}
};

/**
 * 浮点数加法
 * */
const addition = (arg1,arg2)=>{
    var r1,r2,m;
    if(parseInt(arg1)==arg1){
        r1=0;
    }else{
        r1=arg1.toString().split(".")[1].length;
    }
    if(parseInt(arg2)==arg2){
        r2=0;
    }else{
        r2=arg2.toString().split(".")[1].length
    }
    m=Math.pow(10,Math.max(r1,r2))
    return (arg1*m+arg2*m)/m
}

/**
 * 浮点数减法
 * */
const subtraction = (arg1, arg2)=>{
    var c = 0,
        d = arg1.toString(),
        e = arg2.toString();
    try {
        c += d.split(".")[1].length;
    } catch (f) {}
    try {
        c += e.split(".")[1].length;
    } catch (f) {}
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

/** 浮点数乘法*/
const multiplication = (arg1, arg2)=>{
    let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    } catch (e) {
    }
    try {
        m += s2.split('.')[1].length;
    } catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

/** 浮点数除法*/
const division = (arg1, arg2)=> {
  let t1=0,t2=0,r1,r2;
  try{t1=arg1.toString().split(".")[1].length}catch(e){}
  try{t2=arg2.toString().split(".")[1].length}catch(e){}
  r1=Number(arg1.toString().replace(".",""))
  r2=Number(arg2.toString().replace(".",""))
  return (r1/r2)*Math.pow(10,t2-t1);
}

/**
 * 对象的深拷贝
 * @param source 需要深拷贝的对象
 * @returns {object}
 */
const objDeepCopy = (source) => {
    let sourceCopy = {};
    for (let item in source) sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item];
    return sourceCopy;
}

/**
 * 对象数组的深拷贝
 * @param source 需要深拷贝的对象
 * @returns {object}
 */
const objArryDeepCopy = (source) => {
    let sourceCopy = source instanceof Array ? [] : {};
    for (let item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? objArryDeepCopy(source[item]) : source[item];
    }
    return sourceCopy;
}

/**
 * 判断是否是微信浏览器
 * */
const isWxBrowser =()=>{
  let ua = window.navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    return true;
  }else{
    return false;
  }
}

/**
 * 判断是否是支付宝浏览器
 * */
const isAliBrowser =()=>{
  let ua = window.navigator.userAgent.toLowerCase();
  if(ua.match(/alipaydefined/i) == 'alipaydefined'){
    return true;
  }else{
    return false;
  }
}

/**
 * 判断手机是android 还是 ios
 * */
const mobileVersion =()=>{
  let u = navigator.userAgent , isAndroid , isIos;
  isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  if(isAndroid){
    return 'android'
  } else if(isIos){
    return 'ios'
  } else {
    return 'windows'
  }
}

/**
 * 导出 
 **/
export {
    timestampToTime,
    setStore,
    getStore,
    removeStore,
    setCookie,
    getCookie,
    delCookie,
    setTitle,
    addition, 
    subtraction ,
    multiplication,
    division,
    objDeepCopy,
    objArryDeepCopy, 
    isWxBrowser, 
    isAliBrowser, 
    mobileVersion
}