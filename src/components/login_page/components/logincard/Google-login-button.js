import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import {BsGoogle} from 'react-icons/bs'

const clientId = '214100381972-lpdih25hg9rhkk8tb37lsbmev4aflr7d.apps.googleusercontent.com'

export default function GoogleLoginButton () {
    const [googleData, setGoogleData] = useState({})
    const navigate = useNavigate()


    const onSuccess = (response) => {
        setGoogleData(response)
        navigate('/a')
    }
    
    const onFailure = (response) => {
        console.log(response)
    }

  return (
    <div className=''>
        <GoogleLogin
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure} 
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
                <button onClick={renderProps.onClick} className= 'flex flex-row items-center gap-2 font-bold bg-my_main_contrast bg-opacity-90 text-my_creame p-3 rounded-lg hover:bg-opacity-100'><BsGoogle/>Log in</button>
              )}
        />
    </div>
  )
}
