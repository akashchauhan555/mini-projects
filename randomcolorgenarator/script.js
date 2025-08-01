// const myBoxFun = () => {
//     let red = Math.floor(Math.random() * 256)
//     let green = Math.floor(Math.random() * 256)
//     let blue = Math.floor(Math.random() * 256)

//     let colorBox = document.querySelector('.colordisplay')
//     colorBox.style.backgroundColor = `rgb(${red},${green},${blue})`
//     let h1tag = document.querySelector('#colorcode')
//     h1tag.innerHTML = `rgb(${red},${green},${blue})`
// }


// let btnBox = document.querySelector('#gencolorbtn')

// btnBox.addEventListener('click', myBoxFun)

// window.addEventListener('load', myBoxFun)


const colorBoxFun = ()=>{
    let red = Math.floor(Math.random()*256)
let green = Math.floor(Math.random()*256)
let blue = Math.floor(Math.random()*256)

let colorbox = document.querySelector('.colordisplay')
colorbox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
let h1 = document.querySelector('#colorcode')
h1.innerHTML = `rgb(${red}, ${green}, ${blue})`
}


let btn = document.querySelector('#gencolorbtn')
btn.addEventListener('click',colorBoxFun)

window.addEventListener('load',colorBoxFun)