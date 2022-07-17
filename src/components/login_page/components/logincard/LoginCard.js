import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleLoginButton from './Google-login-button'
import Step1 from './Step1';
import Step2 from './Step2';

export default function LoginCard() {
  const navigate = useNavigate();

  const[step1, setStep1] = useState(true);
  const[step2, setStep2] = useState(false);
  return (
    <div className='flex flex-row h-full w-full bg-my_main justify-center'>
      <div className='flex flex-col items-center justify-center gap-8'>
          {/* step1 */}
          { step1 ? <Step1/> : ''}

          {/* step2 */}
          { step2 ? <Step2/> : ''}

          {/* button */}
          { step1 ? <div className=' flex flex-row absolute bottom-20 gap-3 justify-center items-center font-bold text-my_main_contrast'>
             <button onClick={() => {setStep1(false); setStep2(true)}} className='  bg-my_main_contrast bg-opacity-90 hover:bg-opacity-100 p-3 w-28 rounded-lg text-my_creame'>Sign up</button> 
            |
             <GoogleLoginButton/>
          </div> : ''}

      </div>
    </div>
  )
};
