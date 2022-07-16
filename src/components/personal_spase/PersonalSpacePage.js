import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { MdOutlineClear } from "react-icons/md";
import { PersonalSpaceContext } from '../context/PersonalSpace';
import { SheetDataContext } from '../context/sheetData';
import Input from '../login_page/components/logincard/Input';

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
        justify-self-center 
        rounded-lg shadow-2xl 
        animate-comeUp'>
        <div className='h-full w-full'>
            <div onClick={() => setPersonalSpaceContext(false)} 
            className='
            absolute
            flex 
            flex-row 
            top-5
            left-5
            w-12 
            h-12 
            justify-center 
            items-center 
            text-my_main_contrast
            bg-my_text_color 
            bg-opacity-20 
            rounded-lg 
            text-2xl 
            hover:text-3xl 
            hover:bg-opacity-30'>
                <MdOutlineClear/>
            </div>
        </div>

            <div className='flex flex-col bg-opacity-50 w-full h-5/6 rounded-b-lg p-4 text-my_main_contrast'>
                <div className='flex flex-col md:w-2/6 text-start overflow-y-auto'>
                    <span className='font-bold text-2xl ml-2 '>
                        Your data info
                    </span>
                    <span className='ml-2'>
                        Update your data by typing new values.
                    </span>
                    <div>
                        <Input cookieName = 'WorkSheetID' header = 'Worksheet ID'/>
                        <Input cookieName = 'SheetName' header = 'Sheet name'/>
                        <Input cookieName = 'ClientID' header = 'GCP Client ID'/>
                        <Input cookieName = 'APIkey' header = 'GCP API key'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
