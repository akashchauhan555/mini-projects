// import React, { useEffect,useState } from 'react'

// function Home() {

//   const [image, setImage] = useState('') 
//   const fetchImage = async ()=>{
//     let response = await fetch('https://dog.ceo/api/breeds/image/random')
//     let data = await response.json()
//     setImage(data.message)

//   }
//  useEffect(() => {
//    fetchImage()
//  }, [])
 

//   return (
//     <>
//       <section id="section1" >
//         <h1>generate dog image</h1>
//         <button id="colorGeneratingButton" onClick={fetchImage}>Generate Color</button>
//         <div id="colorDisplayingDiv">
//           <img src={image} alt="" />
//         </div>
//       </section>
// </>
//   )
// }

// export default Home


// Self Practice
import React, { useEffect, useState } from 'react'

function Home() {

  const [image, setImage] = useState('null')
  const fetchImage = async ()=>{
    let response = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await response.json()
    setImage(data.message)
  }

  useEffect(()=>{
    fetchImage()
  },[])

  return (
    <>
     <div className="main-page">
      <h1>Generate Random Dog Image</h1>
      <button id="colgen" onClick={fetchImage}>Generate</button>
      <div className="color-box" id="color-box">
        <img src={image} alt="" />
      </div>
</div>
</>
  )
}

export default Home