/* 一些常用的验证 */

/**
 * 检验手机号码
 * @param val {String, Number} 手机号码
 * @returns {boolean}
 */
export const checkPhone = val => /^1\d{10}$/.test(val)

export const Phone = {
  pattern: /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,
  message: "请输入正确的手机号码",
  trigger: "blur"
};

/**
 * 检测密码格式 6-16位数字和字母
 * @param val {String} 密码
 * @returns {boolean}
 */
export const checkPwd = val => /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(val)

export function isvalidUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

/* 合法uri */
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validateAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

export const StrongPassword = {
  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/,
  message: "大小写+数字组成，字数6-18位",
  trigger: "blur"
};

export const NumberString = {
  pattern: /^\d+$/,
  message: "只能输入数字",
  trigger: "blur"
};

export const Phone = {
  pattern: /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,
  message: "请输入正确的手机号码",
  trigger: "blur"
};

export const Number = {
  type: "number",
  message: "只能填写数字",
  trigger: "blur"
};

export const String = {
  type: "string",
  message: "只能填写字符串",
  trigger: "blur"
};

export const Required = {
  required: true,
  message: "填写不能为空",
  trigger: "blur"
};


export const Array = {
  type: "array",
  message: "请选择选项",
  trigger: "change"
};


export const Float2 = {
  pattern: /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,
  message: "只能填写数字并且最多两位小数",
  trigger: "blur"
};

export const Float2And0 = {
  pattern: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
  message: "只能填写数字并且最多两位小数",
  trigger: "blur"
};

export const Float2Max100 = {
  pattern: /^\d\.([1-9]{1,2}|[0-9][1-9])$|^[1-9]\d{0,1}(\.\d{1,2}){0,1}$|^100(\.0{1,2}){0,1}$/,
  message: "只能填写数字并且最大数是100不能超个两位小数",
  trigger: "blur"
};

export const Url = {
  pattern: /(^https?|^nurse):\/\//i,
  message: "请输入正确的链接地址",
  trigger: "blur"
};

export const IntMax99 = {
  pattern: /^[1-9][0-9]{0,1}$/,
  message: "只能填写1-99的整数",
  trigger: "blur"
};

export const Float2Min0ax100 = {
  pattern: /^(\d|[1-9]\d|100)(\.\d{1,2})?$/,
  message: "只能填写0-100，不能超个两位小数",
  trigger: "blur"
};
