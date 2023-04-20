const day = new Date().getDate()
const month = new Date().getMonth() + 1
const year = new Date().getFullYear()
export const date = (day <10 ? '0' + day : day) + '/' + (month <10 ? '0' + month : month) + '/' + year

const hours = new Date().getHours() 
const minutes = new Date().getMinutes()
export const time = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes)











