import React, { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsGithub, BsMailbox } from "react-icons/bs";

export default function MyCard() {
    const [popup, setPopup] = useState(false)
  return (
    <div className={`flex flex-row absolute bottom-10 items-center ${popup ? ' animate-comeLeft' : '  animate-comeRight'} ${popup ? 'right-0' : ' -right-80'} h-fit w-96 bg-my_main_contrast rounded-l-lg p-4`}
    onClick={() => setPopup(!popup)}>
        <div className='flex flex-col justify-center h-64 -ml-3 text-my_creame text-3xl'>
            {popup ? <MdKeyboardArrowRight/> : <MdKeyboardArrowLeft/>}
        </div>

        <div className=' text-my_creame font-semibold justify-start text-start w-full'>

            <div className='flex flex-row items-center gap-1'>
                <img className=' rounded-full w-12 h-12' src='https://media-exp1.licdn.com/dms/image/C4D03AQErcrxahwrs2g/profile-displayphoto-shrink_400_400/0/1655578772067?e=1663804800&v=beta&t=GOMowUnRdh8xloHbHgUSohyTOO5Y7SWE4xQ9owbRLwM'/>
                <div className='font-bold text-lg'>Hillel Dror</div>
            </div>
            
            <div className='flex flex-col p-2 text-sm gap-2'>
                <p>This app is a GUI for moneyman.<br/> 
                Please feel free to suggest features<br/>  
                or ask me any question.</p>
                <div className='flex flex-col gap-2'>                
                    <div className='flex flex-row w-fit rounded-md justify-center items-center gap-2'>
                        <div className=' w-fit h-fit p-2 rounded-md justify-center items-center text-xl'><BsMailbox/></div>
                        <p>hillelbu65@gmail.com</p>
                    </div>
                    <div className='flex flex-row bg-my_main hover:bg-my_hover_main text-my_main_contrast p-2 rounded-md justify-center items-center gap-2'>
                        <a className='flex flex-row gap-2' href='https://github.com/daniel-hauser/moneyman'>
                            <div className='text-xl'><BsGithub/></div>
                            <p>moneyman on Github</p>
                        </a>
                    </div>
                    <button className='flex flex-row bg-my_main hover:bg-my_hover_main text-my_main_contrast p-2 rounded-md justify-center items-center'>
                        <a className='flex flex-row gap-2' href='https://github.com/hillelbu65/moneyman_client'>
                            <div className='text-xl'><BsGithub/></div>
                            <p>This project on Github</p>
                        </a>
                    </button>
                </div>

            </div>
            
        </div>
    </div>
  )
}
