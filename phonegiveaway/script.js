// const months = [
//     'january',
//     'february',
//     'march',
//     'april',
//     'may',
//     'june',
//     'july',
//     'august',
//     'september',
//     'october',
//     'november',
//     'december'
// ]

// const days = [
//     'sunday',
//     'monday',
//     'tuesday',
//     'wednesday',
//     'thursday',
//     'friday',
//     'saturday'
// ]




// let giveAwayDate = new Date(2025,2,12,23,30,0)
// let giveAwayHrs = giveAwayDate.getHours()

// let ampm = 'AM'
// if(giveAwayHrs >= 12){
//     ampm = 'PM'
//     giveAwayHrs -= 12
// }

// let giveAway = document.querySelector('.giveaway')
// giveAway.innerHTML = `giveaway ends on ${days[giveAwayDate.getDay()]}, ${giveAwayDate.getDate()} ${months[giveAwayDate.getMonth()]} ${giveAwayDate.getFullYear()} ${giveAwayHrs}:${giveAwayDate.getMinutes()} ${ampm}`

// const updateDateFun = ()=>{
//     let currDate = new Date()

// let miliseconds = giveAwayDate - currDate

// let days = Math.floor(miliseconds/(24*60*60*1000))


// document.querySelector('#hours').innerHTML = hours.toString().padStart(2,'0')
//   let minutes = Math.floor((miliseconds%(60*60*1000))/(60*1000))
// //   console.log(minutes)
//   document.querySelector('#mins').innerHTML = minutes.toString().padStart(2,'0')
//   let seconds = Math.floor((miliseconds%(60*1000))/1000)
// //   console.log(seconds)
//   document.querySelector('#seconds').innerHTML = seconds.toString().padStart(2,'0')
// };

// setInterval(updateDateFun,1000)



//Self Practicing

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
]

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
]

let giveAwayDate = new Date(2025,1,26,17,0,0)
let giveAwayHrs = giveAwayDate.getHours()

let ampm = 'AM'
if(giveAwayHrs>=12){
  ampm = 'PM'
  giveAwayHrs -= 12
}

let giveAwayInfo = document.querySelector('.infopara')
giveAwayInfo.innerHTML = `giveaway ends on ${days[giveAwayDate.getDay()]}, ${giveAwayDate.getDate()} ${months[giveAwayDate.getMonth()]} ${giveAwayDate.getFullYear()} ${giveAwayHrs.toString().padStart(2,'0')}:${giveAwayDate.getMinutes().toString().padStart(2,'0')} ${ampm}`

// Function for performing the tasks
const remainsTimeFun = ()=>{
  let currDate = new Date()
let miliseconds = giveAwayDate - currDate
// console.log(miliseconds)

// Days
let totalDays = Math.floor(miliseconds/(24*60*60*1000)).toString().padStart(2,'0')
// console.log(totalDays)
document.querySelector('#days').innerHTML = totalDays

// Hours
let hours = Math.floor((miliseconds%(24*60*60*1000))/(60*60*1000))
// console.log(hours)
document.querySelector('#hours').innerHTML = hours.toString().padStart(2,'0')

// Minutes
let minutes = Math.floor((miliseconds%(60*60*1000))/(60*1000))
document.querySelector('#minutes').innerHTML = minutes.toString().padStart(2,'0')

// Seconds
let seconds = Math.floor((miliseconds%(60*1000))/(1000))
// console.log(seconds)
document.querySelector('#seconds').innerHTML = seconds.toString().padStart(2,'0')
}

setInterval(remainsTimeFun,1000)
