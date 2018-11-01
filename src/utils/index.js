import moment from 'moment'

/**
 * 
 * @param {*} zh string
 */
export const getKeyForZh = (zh) => {
  let keyConfig={
    '姓名':'name',
    '电话': 'mobile',
    '身份证':'idCardNo',
    '标签':'tag'
  }
  return keyConfig[zh]
}

export const formaTime = (time) => {
  return [moment(time).utcOffset(8).format('YYYY/MM/DD HH:mm')]
}

export const formaTimeS = (time) => { //精确到秒
  return [moment(time).utcOffset(8).format('YYYY/MM/DD HH:mm:ss')]
}

export const formatSeconds = (value) =>{
  if (value === null) return null
  let secondTime = parseInt(value)// 秒
  let minuteTime = 0// 分
  if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
    //获取分钟，除以60取整数，得到整数分钟
    minuteTime = parseInt(secondTime / 60)
    //获取秒数，秒数取佘，得到整数秒数
    secondTime = parseInt(secondTime % 60)
    //如果分钟大于60，将分钟转换成小时
    if(minuteTime > 60) {
      //获取小时，获取分钟除以60，得到整数小时
      //获取小时后取佘的分，获取分钟除以60取佘的分
      minuteTime = parseInt(minuteTime % 60)
    }
  }
  let result = `${parseInt(secondTime)}秒`

  if(minuteTime > 0) {
    result = `${parseInt(minuteTime)}分${result}`
  }
  return result
}

/**
 * 
 * @param {*} array array want to slice
 * @param {*} size Number
 */
export const sliceArray = (array, size) => {
  var result = []
  for (var x = 0; x < Math.ceil(array.length / size); x++) {
    let start = x * size
    let end = start + size
    result.push(array.slice(start, end))
  }
  return result
}

export const readFileText = (file, encoding = 'gb2312') => {
  return new Promise((resolve)=>{
    let reader = new FileReader()
    reader.onload = (e => {
      resolve(e.target.result)
    })
    reader.readAsText(file, encoding )
  })
}

export const addEmptyItemToArray = (array) => {
  let temp = array && [...array] || []
  temp.unshift({
    key: null, name: '全部'
  })
  return temp
}

/**
 * 
 * @param {*} n number
 */
export const toDub = (n)=> {
  return n < 10 ? `0${n}` : n
}

//根据mobile过滤相同数据
export const uniqueArray = (arr)=> {
  return Array.from(new Map([...arr].map((x)=>[x.mobile, x])).values())
}

export const mobileFormat = (mobile) => {
  return mobile.replace(mobile.substr(3, 4), '****')
}

export const exportCsv = (obj) => {
  let titleForKey = obj.titleForKey
  let data = obj.data
  let str = []
  str.push(obj.title.join(',')+'\n')
  for(let i=0;i<data.length;i++){
    let temp = []
    for(let j=0;j<titleForKey.length;j++){
      temp.push(data[i][titleForKey[j]])
    }
    str.push(temp.join(',')+'\n')
  }
  let uri = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(str.join(''))
  let downloadLink = document.createElement('a')
  downloadLink.href = uri
  downloadLink.download = '进件导出.csv' 
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}
