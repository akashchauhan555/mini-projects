import React, { useEffect, useState } from 'react'

function ColGen() {
  let [color,setColor] = useState()

   const genRanCol = ()=>{
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    let rgbColor = `rgb(${red},${green},${blue})`
    setColor(rgbColor)
   }

   useEffect(genRanCol,[])
  return (
    <section id="section1">
    <h1>generate random color</h1>
    <button id="colorGeneratingButton" onClick={genRanCol}>Generate Color</button>
    <div id="colorDisplayingDiv" style={{backgroundColor:color}}></div>
    <h1 id="colorNAme">Color: {color}</h1>
</section>
  )
}
 
export default ColGen 