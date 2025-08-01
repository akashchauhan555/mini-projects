// const getDateFun = ()=>{
//     let currDate = new Date()
//     let hrs = currDate.getHours()
//     let mts = currDate.getMinutes()
//     let sec = currDate.getSeconds()

//     let hours = document.querySelector('#hours')
//     hours.innerHTML = hrs.toString().padStart(2,'0')
//     let ampmVal = 'PM'
//     if(hrs >= 12){
//         ampmVal.innerHTML = "AM"
//         hrs = hrs-12
//     }

//     let minutes = document.querySelector('#minutes')
//     minutes.innerHTML = mts.toString().padStart(2,'0')

//     let seconds = document.querySelector('#seconds')
//     seconds.innerHTML = sec.toString().padStart(2,'0')

//     let ampm = document.querySelector('#ampm')
//     ampm.innerHTML = ampmVal
// }

// setInterval(getDateFun,1000)


// Self Practicing

// const myTimeBoxFun = ()=>{
//     let currDate = new Date()
// let hrs = currDate.getHours()
// let mts = currDate.getMinutes()
// let sec = currDate.getSeconds()

// let hours = document.querySelector('#hours')
// hours.innerHTML = hrs.toString().padStart(2,'0')
// let ampmVal = 'PM'
// if(hrs>=12){
//     ampmVal.innerHTML = 'AM'
//     hrs -= 12
// }

// let minutes = document.querySelector('#minutes')
// minutes.innerHTML = mts.toString().padStart(2,'0')

// let seconds = document.querySelector('#seconds')
// seconds.innerHTML = sec.toString().padStart(2,'0')

// let ampm = document.querySelector('#ampm')
// ampm.innerHTML = ampmVal
// }

// setInterval(myTimeBoxFun,1000)


// Self Practicing for the third time
const myTimeBoxFun = ()=>{
    let myDate = new Date()
let hrs = myDate.getHours()
let mts = myDate.getMinutes()
let sec = myDate.getSeconds()

let hours = document.querySelector('#hours')
hours.innerHTML = hrs.toString().padStart(2,'0')
let ampmVal = "AM"
if(hrs>=12){
    ampmVal.innerHTML = "PM"
    hrs -= 12
}

let minutes =document.querySelector('#minutes')
minutes.innerHTML = mts.toString().padStart(2,'0')


let seconds = document.querySelector('#seconds')
seconds.innerHTML = sec.toString().padStart(2,'0')

let ampm = document.querySelector('#ampm')
ampm.innerHTML = ampmVal
}

setInterval(myTimeBoxFun,1000)
