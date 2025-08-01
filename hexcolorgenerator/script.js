
// const myBoxFun = ()=>{
//     let hexChars = '0123456789ABCDEF'
// let hexColor = '#'
// for(let i = 0 ;i < 6;i++){
//     hexColor += hexChars[Math.floor(Math.random()*16)]
// }

// let colorBox = document.querySelector('#displayColor')
// colorBox.style.backgroundColor = hexColor

// let h1 = document.querySelector('#heading2')
// h1.innerHTML = hexColor
// }

// let btn = document.querySelector('#btn')
// btn.addEventListener('click',myBoxFun)

// // Generate a random color on the page load
// window.onload = myBoxFun

  // Method 2

const myBoxFun = ()=>{
    let str = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i<6; i++){
        let index = Math.floor(Math.random()*str.length)
        let ltr = str.charAt(index)
        color = color + ltr

        let displaycolor = document.querySelector('#displayColor')
        displaycolor.style.backgroundColor = `${color}`
        let colorcode = document.querySelector('#heading2')
        colorcode.innerHTML = `${color}`
    }
}

let btn = document.querySelector('#btn')
btn.addEventListener('click',myBoxFun)

// window.addEventListener('load',myBoxFun)

window.onload = myBoxFun


