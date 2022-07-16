import React, { useState } from 'react'
import {BiShekel} from 'react-icons/bi'

export default function BillCard(props) {

  return (
    <div className='
    w-40
    h-auto 
    rounded-lg 
    ml-4
    group
    duration-100 
  bg-my_main
   bg-opacity-90
     text-my_text_color
    transition ease-out  
    hover:-translate-y-1 
    hover:scale-110'>
        <div className='flex flex-col'>
            <span className='font-bold m-2'><div className='flex flex-row justify-center items-center'>{props.data.sum}  &#8362; </div></span>
        </div>
        <div className=' 
        flex 
        flex-col 
        w-40
        h-12 
        rounded-lg 
        rounded-t-none 
        place-content-center
       text-my_main_contrast
       bg-my_creame
        group-hover:bg-opacity-80
        font-medium
        shadow-lg
        '>
            <span>{props.data.name}</span>
        </div> 
    </div>
  )
}
