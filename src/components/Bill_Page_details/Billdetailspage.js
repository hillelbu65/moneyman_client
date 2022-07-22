import React, { useContext } from 'react'
import { BillDetailsContext } from '../context/BillDetailsContext'
import { MdOutlineClear } from "react-icons/md";
import ChartYear from './components/ChartYear';
import { YearContext } from '../context/yearContext';
import { MdKeyboardArrowRight } from "react-icons/md";
import BillView from './components/billDetails/BillView';

export default function Billdetailspage() {

    const [[billDetailsOn, setBillDetailsOn], [billCategory, setBillCategory], [billName, setBillName]] = useContext(BillDetailsContext);
    const [yearContext, setYearContext] = useContext(YearContext)

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
    items-center
     p-4'>
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

            <div className='h-30 w-full'>
                <div onClick={() => setBillDetailsOn(false)} 
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
                bg-my_creame 
                rounded-lg 
                text-2xl 
                hover:text-3xl 
                hover:bg-opacity-80'>
                    <MdOutlineClear/>
                </div>
                <div className=' flex flex-rows items-center absolute top-8 left-20 text-xl font-bold text-my_creame'> {yearContext} 
                <span className=' text-my_main_contrast mt-1'><MdKeyboardArrowRight/></span> {billCategory} 
                <span className=' text-my_main_contrast mt-1'><MdKeyboardArrowRight/></span> <div className=' text-my_main_contrast'>{billName}</div></div>
            </div>

            <div className='grid grid-cols-8 gap-3 w-full h-5/6 rounded-b-lg p-4 text-my_main_contrast overflow-y-auto'>
                <ChartYear billName = {billName}/>
                <BillView billName = {billName}/>
            </div>
        </div>
    </div>
  )
}
