import React from 'react';
import Cookies from 'js-cookie';

export default function Input({cookieName = '', header = ''}) {
    
  return (
    <div className=' 
        flex 
        flex-col 
        h-fit 
        p-3'>
            {header}
            <input className=' 
            p-2 
            mt-1
            bg-my_creame  
            border-
            bg-opacity-50
             rounded-md'
            onChange = {(e) => Cookies.set(cookieName, e.target.value)}
            value = {Cookies.get(cookieName)}/>
    </div>
  )
}
