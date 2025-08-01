// let date = document.querySelector(".date");
// let currDate = new Date();
// // date.innerHTML = ${currDate.toLocaleDateString()}
// date.innerHTML = `${currDate.getDate()}/${
//   currDate.getMonth() + 1
// }/${currDate.getFullYear()}`;

// let startBtn = document.querySelector(".start");
// let stopBtn = document.querySelector(".stop");
// let resetBtn = document.querySelector(".reset");

// stopBtn.disabled = true;
// resetBtn.disabled = true;

// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// let clockBox = document.querySelector(".clock");
// clockBox.innerHTML = `${hours.toString().padStart(2, "0")}:${String(
//   minutes
// ).padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// let intervalRef;
// startBtn.addEventListener("click", () => {
//   startBtn.disabled = true;
//   stopBtn.disabled = false;
//   resetBtn.disabled = false;
//   intervalRef = setInterval(() => {
//     seconds++;
//     if (seconds == 60) {
//       seconds = 0;
//       minutes++;
//     }
//     if (minutes == 60) {
//       minutes = 0;
//       hours++;
//     }
//     clockBox.innerHTML = `${hours.toString().padStart(2, "0")}:${String(
//       minutes
//     ).padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   stopBtn.disabled = true;
//   startBtn.disabled = false;
//   resetBtn.disabled = false;
//   clearInterval(intervalRef);
// });

// resetBtn.addEventListener("click", () => {
//   stopBtn.disabled = true;
//   resetBtn.disabled = true;
//   startBtn.disabled = false;
//   clearInterval(intervalRef);
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   clockBox.innerHTML = `${hours.toString().padStart(2, "0")}:${String(
//     minutes
//   ).padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// });



// Self Practicing

// let dates = document.querySelector('.date')
// let myDate = new Date()
// let date = String(myDate.getDate()).padStart(2,"0")
// let month = String(myDate.getMonth()+1).padStart(2,"0")
// let year = String(myDate.getFullYear()).padStart(2,"0")

// dates.innerHTML = `${date}/${month}/${year}`

// // console.log(dates.innerHTML)

// let startBtn = document.querySelector('.start')
// startBtn.addEventListener('click',()=>{

// })

// New Practice

let dates = document.querySelector('.date')
let currDate = new Date()
dates.innerHTML = `${currDate.getDate().toString().padStart(2,'0')}/${(currDate.getMonth()+1).toString().padStart(2,'0')}/${currDate.getFullYear()}`

// Alternate way of converting to string
// let date = String(myDate.getDate()).padStart(2,"0")
// let month = String(myDate.getMonth()+1).padStart(2,"0")