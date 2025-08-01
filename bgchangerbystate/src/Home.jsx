import React, { useState } from 'react'

function Home() {

  // const bgChanger = (e)=>{
  //   document.body.style.backgroundColor = e.target.innerHTML
  // }
  const [color, setColor] = useState('gray')
  const bgChanger = (e)=>{
    setColor(e.target.innerHTML)
  }


  return (
    <div className='w-screen h-screen flex justify-center items-center bg-transparent relative' style={{backgroundColor:color}}>
      <div className='bg-white absolute bottom-4 text-white'>
        <button className='bg-red-600 my-3 mx-3 py-4 px-4 rounded' onClick={bgChanger}>red</button>
        <button className='bg-green-600 my-3 mx-3 py-4 px-4 rounded' onClick={bgChanger}>green</button>
        <button className='bg-yellow-400 my-3 mx-3 py-4 px-4 rounded' onClick={bgChanger}>yellow</button>
        <button className='bg-blue-600 my-3 mx-3 py-4 px-4 rounded' onClick={bgChanger}>blue</button>
        <button className='bg-orange-600 my-3 mx-3 py-4 px-4 rounded' onClick={bgChanger}>orange</button>
        <button className='bg-purple-600 my-3 mx-3 py-4 px-4 rounded' onClick={bgChanger}>purple</button>
        <button className='bg-pink-600 my-3 mx-3 py-4 px-4 rounded' onClick={bgChanger}>pink</button>
      </div>
    </div>
  )
}

export default Home