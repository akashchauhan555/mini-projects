import React from 'react'

function Home() {
  
    const bgChanger = (e) =>{
        document.body.style.backgroundColor = e.target.innerHTML
    }

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-transparent relative'>
        <div className='mx-3 bg-white flex justify-center items-center absolute bottom-4 text-white'>
            <button className='bg-red-600 my-2 mx-3 py-4 px-5 rounded' onClick={bgChanger}>red</button>
            <button className='bg-green-600 my-2 mx-3 py-4 px-5 rounded' onClick={bgChanger}>green</button>
            <button className='bg-yellow-600 my-2 mx-3 py-4 px-5 rounded' onClick={bgChanger}>yellow</button>
            <button className='bg-orange-600 my-2 mx-3 py-4 px-5 rounded' onClick={bgChanger}>orange</button>
            <button className='bg-black my-2 mx-3 py-4 px-5 rounded' onClick={bgChanger}>black</button>
            <button className='bg-blue-600 my-2 mx-3 py-4 px-5 rounded' onClick={bgChanger}>blue</button>
            <button className='bg-purple-600 my-2 mx-3 py-4 px-5 rounded' onClick={bgChanger}>purple</button>
        </div>
    </div>
  )
}

export default Home