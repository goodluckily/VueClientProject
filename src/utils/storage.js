/* Storage的存储方式  */
function getStorage (storage) {
  return function (key) {
    return new Promise(resolve => {
      let value = storage.getItem(key)
      try {
        resolve(JSON.parse(value))
      } catch (e) {
        resolve(value)
      }
    })
  }
}

function setStorage (storage) {
  return function (key, value) {
    return new Promise(resolve => {
      if (typeof value === 'object') {
        storage.setItem(key, JSON.stringify(value))
      } else {
        storage.setItem(key, value)
      }
      resolve(value)
    })
  }
}


function removeStore(storage) {
	return function (key) {
    return new Promise(resolve => {
      storage.removeItem(key);
      resolve("delok")
    })
  }
	window.localStorage
}

// localStorage的存贮获取
export const local = {
  getItem: getStorage(localStorage),
  setItem: setStorage(localStorage),
  delItem: removeStore(localStorage)
}

// sessionStorage的存贮获取
export const session = {
  getItem: getStorage(sessionStorage),
  setItem: setStorage(sessionStorage),
  delItem: removeStore(sessionStorage)
}


//获取返回结果必须是
// result.then(res=>{
//   console.log(res) // res为promise中的值
// })



