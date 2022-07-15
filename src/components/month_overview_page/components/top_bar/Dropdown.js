import React, { useContext, useEffect, useState } from 'react'
import { MonthContext } from '../../../context/monthContext';
import { MonthDataContext } from '../../../context/monthData';
import { SheetDataContext } from '../../../context/sheetData';
import { YearContext } from '../../../context/yearContext';
import { getMonth } from '../../Data_management/pullData';

export default function Dropdown(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(new Date().getFullYear().toString())
    const  [data, setData] = useState([])

    //Year context.
    const [yearContext, setYearContext] = useContext(YearContext);
    //Month context.
    const [monthContext, setMonthContext] = useContext(MonthContext);
    //Month data context.
    const [monthDataContext, setMonthDataContext] = useContext(MonthDataContext);
    //Sheet data context.
    const [sheetDataContext, setSheetDataContext] = useContext(SheetDataContext);

    const getDataFromGoogle = async () => {
        const response = await getMonth(sheetDataContext.workSheetId, sheetDataContext.sheetName, monthContext, yearContext)
        setData(response.range)
    } 

    useEffect(() => {
        getDataFromGoogle()
    }, [monthContext, yearContext])


    useEffect(() => {
        const closeDropdown = (e) => {
            console.log(e)
            if(e.path[0].id !== 'dropDown' ){
                
                setDropdownOpen(false)
            }
        }
        document.body.addEventListener('click', closeDropdown)
        return () => document.body.removeEventListener('click', closeDropdown)
    })
    
    const selections = data.map((year) => {
        return (<div onClick={() => { setDropdownValue(year); setYearContext(year); setDropdownOpen(false) }}
            className='
            flex 
            bg-my_creame 
            hover:bg-my_main_contrast 
            text-my_main_contrast 
            hover:text-my_text_color 
            w-20 
            h-14 
            stext-my_main001021 
            font-medium 
            hover:font-bold 
            rounded-xl
            justify-center 
            items-center 
            hover:opacity-80'>{year}</div>)
    })

  return (
    <div className=' flex flex-col h-fit w-fit text-my_main001021'>
        <div onClick={() => setDropdownOpen(!dropdownOpen)} 
        id='dropDown'
        className='
        flex 
        flex-col 
        place-content-center 
        bg-my_main 
        hover:bg-my_hover_main 
        w-24 
        h-16 
        rounded-lg 
        font-bold 
        hover:text-md 
        duration-100 
        transition ease-out  
        hover:-translate-y-1
        hover:scale-10
        text-my_text_color
        shadow-2xl'>
            {dropdownValue}
        </div>
        { dropdownOpen ? 
        <div className='
        flex 
        flex-col 
        justify-center 
        items-center 
        bg-my_main 
        w-24 
        h-fit 
        rounded-lg 
        mt-2 
        gap-2 
        p-2'>
            {selections}
        </div> : ''}
    </div>
  )
}
