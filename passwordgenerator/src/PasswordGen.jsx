import React, { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGen() {
    let [password, setPassword] = useState('')
    let [length, setLength] = useState(8) 
    let [numbers, setNumber] = useState(false)
    let [symbols, setSymbol] = useState(false)

    //  const genPass = ()=>{
    //     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    //     if(numbers){
    //       str += '0123456789'
    //     }
    //     if(symbols){
    //       str += '!@#$%^&*()_+'
    //     }
    //     let myPass = ''
    //     for(let i = 0; i<=length; i++) {
    //         let index = Math.floor(Math.random()*str.length)
    //         let myChar = str.charAt(index)
    //         myPass += myChar
    //     }
    //     setPassword(myPass)
    //  }

    const genPass = useCallback(()=>{           // Note: We use useCallback() hook to prevent from the recreation of the function once the function is created then it prevents from the recreation and it returns the same function and we stored it and pass to the useEffect() hook.
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if(numbers){
        str += '0123456789'
      }
      if(symbols){
        str += '!@#$%^&*()_+'
      }
      let myPass = ''
      for(let i = 0; i<=length; i++) {
          let index = Math.floor(Math.random()*str.length)
          let myChar = str.charAt(index)
          myPass += myChar
      }
      setPassword(myPass)
   },[length, numbers, symbols])

     useEffect(genPass,[length, numbers, symbols])

     let passRef = useRef()                               // It is a hook used to take the reference of that block and in this we use ref={variableofuseRefwhichreturnit}  we use this as attribute of that block.


  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gray-800'>
    <div className="py-14 w-3/4 flex flex-col justify-center items-center bg-gray-700 rounded-md">
      <div className='flex flex-col justify-center items-center relative w-3/4'>
        <input className="h-14 w-full my-10 outline-none px-5 py-1 bg-gray-100 rounded-md text-orange-500 text-2xl font-semibold" type="text" readOnly value={password} ref={passRef}/>
        <label className='bg-orange-400 hover:bg-orange-500 text-black active:text-white font-medium rounded-r-md cursor-pointer px-8 py-3.5 text-xl absolute right-0' onClick={()=>{window.navigator.clipboard.writeText(passRef.current.value)}}>Copy</label>
        </div>
      <div className="my-3 w-full px-20 flex justify-evenly">
        <div>
          <input className='mx-2 w-80' id='range' type="range" min={8} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
          <label className='text-2xl text-orange-600' htmlFor="range">{length}</label>
          </div>
        <div>
          <input id="num" className='mx-2 h-5 w-5' type="checkbox" onChange={(e)=>{setNumber(e.target.checked)}}/> 
          <label className='text-2xl text-orange-600' htmlFor="num">Number</label>
          </div>
        <div>
          <input id="symbol" className='mx-2 h-5 w-5' type="checkbox" onChange={(e)=>{setSymbol(e.target.checked)}}/> 
          <label className='text-2xl text-orange-600' htmlFor="symbol">Symbol</label>
          </div>
      </div>
   </div>
</div>
  )
}

export default PasswordGen