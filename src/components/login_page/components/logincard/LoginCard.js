import React from 'react'
import GoogleLoginButton from './Google-login-button'

export default function LoginCard() {
  return (
    <div className='flex flex-row h-fit w-fit'>
      <div className='flex flex-col items-center '>
        <div className=' bg-dolar_1 w-9/10 h-5' ></div>
        <div className=' bg-dolar_1 w-9/10 h-5 -mt-1' ></div>
        <div className=' bg-dolar_1 w-9/10 h-10 -mt-1' ></div>
                  
        <div className=' flex flex-col items-start text-left bg-my_yellow h-fit w-fit p-4 rounded-md'>
          <div className='flex flex-col items-start font-bold text-8xl w-fit mt-8 ml-4 text-my_brown'>
              welcome
            <div className='flex flex-row items-start'>
              <div className=' mr-3 w-fit'>to</div>
              <div className='text-white w-fit'>Moneyman</div>
            </div>
          
            <div className=' font-normal text-base'>
              <div className=' flex flex-col mt-2  h-fit p-3 w-fit'>
                WorkSheet ID
                <input className=' p-2 mt-1 bg-white opacity-80 rounded-md'></input>
              </div>
              <div className=' flex flex-col mb-4 h-fit p-3'>
                Sheet name
                <input className=' p-2 mt-1 bg-white opacity-80 rounded-md'></input>
              </div>
              <GoogleLoginButton/>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
