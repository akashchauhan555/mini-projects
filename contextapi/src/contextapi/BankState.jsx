import React, { Children, useState } from 'react'
import { bankContext } from './bankContext'

const BankState = ({children}) => {

    const [balance, setBalance]= useState(10000)

    const depositFun = ()=>{
        console.log('deposit')
    }

    const withdrawFun = ()=>{
        console.log('withdraw')
    }


  return (
    <bankContext.Provider value={{balance, setBalance, depositFun, withdrawFun}}>
        {children}
    </bankContext.Provider>
  )
}

export default BankState