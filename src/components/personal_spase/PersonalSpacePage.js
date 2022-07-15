import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { MdOutlineClear } from "react-icons/md";
import { PersonalSpaceContext } from '../context/PersonalSpace';
import { SheetDataContext } from '../context/sheetData';

export default function PersonalSpacePage() {

    //Sheet data context.
    const [sheetDataContext, setSheetDataContext] = useContext(SheetDataContext);
    const[workSheetId, setWorkSheetId] = useState('');
    const[sheetName, setSheetName] = useState('');
    const [personalSpaceContext, setPersonalSpaceContext] = useContext(PersonalSpaceContext)

    useEffect(() => {
        setWorkSheetId(sheetDataContext.workSheetId);
        setSheetName(sheetDataContext.sheetName)
    }, [])

  return (
    <div className=' 
    fixed 
    left-0 
    top-0 
    w-full 
    h-full 
    bg-black 
    bg-opacity-40 
    grid 
    grid-cols-8 
    items-center'>

        <div className='
        flex 
        flex-col 
        justify-end 
        fixed 
        w-3/4 
        h-5/6 
        bg-my_main 
        text-my_text_color 
        justify-self-center 
        rounded-lg shadow-2xl 
        animate-comeUp'>
            <div onClick={() => setPersonalSpaceContext(false)} 
            className='
            flex 
            flex-row 
            my-12 
            mx-8 
            w-12 
            h-12 
            justify-center 
            items-center 
            bg-my_text_color 
            bg-opacity-20 
            rounded-lg 
            text-2xl 
            hover:text-3xl 
            hover:bg-opacity-30'>
                <MdOutlineClear/>
            </div>

            <div className='
            grid 
            grid-cols-3 
            bg-opacity-50 
            w-full h-5/6 
            rounded-b-lg'>
                <div className='
                col-start-1 
                col-end-4'>
                    <div className='
                    flex 
                    flex-col 
                    font-normal 
                    text-base 
                    text-my_main001021
                    p-4'>
                        <div className='
                        flex 
                        flex-row '>
                            <span className='
                            font-bold 
                            text-2xl 
                            ml-2 '>Your data info</span>
                        </div>

                        <div className=' 
                        flex 
                        flex-col  
                        h-fit p-3 
                        w-fit 
                        text-start'>
                            WorkSheet ID
                            <input className=' 
                            p-2 
                            mt-1 
                            bg-white 
                            opacity-50 
                            rounded-md 
                            text-my_main_contrast'
                                onChange={(e) => {setWorkSheetId(e.target.value); setSheetDataContext({
                                    workSheetId: workSheetId, 
                                    sheetName: sheetName
                                })}}
                                value={workSheetId}></input>
                        </div>
                        <div className=' 
                        flex 
                        flex-col 
                        h-fit p-3 
                        w-fit 
                        text-start'>
                            Sheet name
                            <input className=' 
                            p-2 mt-1 
                            bg-white 
                            opacity-50 
                            rounded-md 
                            text-my_main_contrast'
                                onChange={(e) => {setSheetName(e.target.value); setSheetDataContext({
                                    workSheetId: workSheetId, 
                                    sheetName: sheetName
                                })}}
                                value={sheetName}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
