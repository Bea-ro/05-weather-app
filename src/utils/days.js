const day = new Date().getDate()
const month = new Date().getMonth() + 1
const year = new Date().getFullYear()
export const date = (day <10 ? '0' + day : day) + '/' + (month <10 ? '0' + month : month) + '/' + year

const hours = new Date().getHours() 
const minutes = new Date().getMinutes()
export const time = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes)


// en qty se pasará 1 al 5
export const getNextDay = (qty) => {
 const dt = 1681765200
 const transformDt = new Date(dt*1000+24*60*60*1000*qty).toLocaleString('es-ES')
 const fragment = transformDt.split('/')
 const nextDay = fragment[2].slice(0, 4) + '-' + (fragment[1] <10 ? '0' + fragment[1] : fragment[1]) + '-' + (fragment[0] <10 ? '0' + fragment[0] : fragment[0]) + ' ' + fragment[2].slice(6, 14)
return nextDay
}

export const getFormatedNextDay = (day) => {
    const dateOnly = getNextDay(day).slice(0,10);
    const fragments = dateOnly.split('-');
    return fragments[2] + '/' + fragments[1] + '/' + fragments[0]
}








