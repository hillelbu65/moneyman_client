import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleLoginButton from './Google-login-button'

export default function LoginCard() {
  const navigate = useNavigate();

  const[step1, setStep1] = useState(true);
  const[step2, setStep2] = useState(false);
  const[step3, setStep3] = useState(false);

  return (
    <div className='flex flex-row h-3/5 w-fit col-start-2'>
      <div className='flex flex-col items-center '>
        <div className='flex flex-col items-start text-left bg-my_green w-fit p-6 rounded-md shadow-md h-full '>
          
          { step1 ? <div className='flex flex-col items-start font-bold text-4xl md:text-8xl w-fit mt-8 ml-4 text-my_blue001021'>
              welcome
            <div className='flex flex-row items-start'>
              <div className=' mr-3 w-fit'>to</div>
              <div className='text-white w-fit'>Moneyman</div>
            </div>
          </div> : ''}

          { step2 ? <div className='flex flex-col font-normal text-base text-my_blue001021'>
            <div className='flex flex-row justify-center items-center'>
              <span className=' font-bold text-lg'>Your data info</span>
            </div>
            
            <div className=' flex flex-col  h-fit p-3 w-fit text-my '>
              WorkSheet ID
              <input className=' p-2 mt-1 bg-white opacity-50 rounded-md'></input>
            </div>
            <div className=' flex flex-col h-fit p-3'>
              Sheet name
              <input className=' p-2 mt-1 bg-white opacity-50 rounded-md'></input>
            </div>
          </div> : ''}
          <div className={`flex flex-row-reverse items-end ${step2 ?'justify-center': ''} h-full w-full font-bold`}>
            { step1 ? <button onClick={() => {setStep1(false); setStep2(true)}} className='  bg-my_blue001021 p-3 w-28 rounded-lg text-white'>Register </button> : <GoogleLoginButton/>}
          </div>
         
        </div>
      </div>
    </div>
  )
}
