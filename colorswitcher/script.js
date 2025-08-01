//  const bgChanger = (color)=>{
//     let section = document.querySelector("#mainSection") 
//     section.style.backgroundColor = color
//  }

//  let btn = document.querySelectorAll('button')

//  btn.forEach((mybtn)=>{
//    mybtn.addEventListener('click',(e)=>{
//       bgChanger(e.target.innerText)
//    })
//  })




// for practicing   
const bgChanger2 = (color) => {
   let section = document.querySelector('#mainSection')
   section.style.backgroundColor = color
}

let btn = document.querySelectorAll('button')

btn.forEach((mybtn) => {
   mybtn.addEventListener('click', (e) => {
      bgChanger2(e.target.innerText)
   })
})


// btn.forEach((mybtn)=>{
//    mybtn.addEventListener('click',(e)=>{
//       bgChanger2(e.target.innerText)
//    })
// })