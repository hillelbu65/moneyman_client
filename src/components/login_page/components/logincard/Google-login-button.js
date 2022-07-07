import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";

const clientId = '214100381972-lpdih25hg9rhkk8tb37lsbmev4aflr7d.apps.googleusercontent.com'

export default function GoogleLoginButton () {
    const [googleData, setGoogleData] = useState({})
    const navigate = useNavigate()


    const onSuccess = (response) => {
        console.log('Logd In : ' + response.profileObj)
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
                <button onClick={renderProps.onClick} className= ' bg-my_blue001021 font-bold text-white p-3 rounded-lg'>Done</button>
              )}
        />
    </div>
  )
}
