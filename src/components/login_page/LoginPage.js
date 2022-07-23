import React from 'react'
import LoginCard from './components/logincard/LoginCard'
import MyCard from './components/MyCard'

export default function LoginPage() {
    
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-slate-400'>
        <LoginCard/>
        <MyCard/>
    </div>
  )
}