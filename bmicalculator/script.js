// let form = document.querySelector('#form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     let height = document.querySelector('#height')
// let heightNum = Number(height.value)/100


// let weightNum = Number(document.querySelector('#weight').value)


// // Calculate BMI 
// let bmi = (weightNum/heightNum**2).toFixed(2)

// // Display Result
// let bmiResult = document.querySelector('h3')
// if(bmi < 18 ){
//     result.innerHTML = `BMI Value: ${bmi}: You are under weight`
// }

// else if(bmi <= 24 ){
//     bmiResult.innerHTML = `BMI Value: ${bmi}: You are normal weight`
// }

// else if(bmi <= 30 ){
//     bmiResult.innerHTML = `BMI Value: ${bmi}: You are over weight`
// }

// else {
//     bmiResult.innerHTML = `BMI Value: ${bmi}: You are obese`
// }
// // After calculating we clear the input box
// document.querySelector('#height').value = ""
// document.querySelector('#weight').value = ""

// })

// Self Practicing


// let form = document.querySelector('#form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     let height = document.querySelector('#height')
// let heightNum = Number(height.value)/100

// let weightNum = Number(document.querySelector('#weight').value
// )

// // Calculate the bmi
// let bmi = (weightNum / heightNum**2).toFixed(2)

// // Displaying the result
// let result = document.querySelector('.result')

// if(bmi < 18){
//     result.innerHTML = `BMI Value: ${bmi} : You are Under Weight`
// }

//  else if(bmi >= 18 && bmi <= 24) {
//     result.innerHTML = `BMI Value: ${bmi} : You are Normal Weight`
// }

// else if(bmi > 24 && bmi <= 30){
//     result.innerHTML = `BMI Value: ${bmi} : You are Over Weight`
// }
// else{
//     result.innerHTML = `BMI Value: ${bmi} : You are Obese`
// }

// // After calculating clearing the both input boxes

// document.querySelector('#height').value = ""
// document.querySelector('#weight').value = ""
// })


// Self Practicing 2nd time



let form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let height = document.querySelector('#height')
let heightNum = Number(height.value)/100

let weightNum = Number(document.querySelector('#weight').value)

// Calculating the bmi
let bmi = (weightNum / heightNum**2).toFixed(2)

// Displaying the result

let result = document.querySelector('.result')
 
if(bmi < 18) {
    result.innerHTML = `BMI Value: ${bmi} : You are Under Weight`
}

else if(bmi <= 24) {
    result.innerHTML = `BMI Value: ${bmi} : You are Normal Weight`
}

else if(bmi <= 30) {
    result.innerHTML = `BMI Value: ${bmi} : You are Over Weight`
}

else {
    result.innerHTML = `BMI Value: ${bmi} : You are Obese`
}

// After calculating clearing both the input boxes

document.querySelector('height').value = ""
document.querySelector('#weight').value = ""
})