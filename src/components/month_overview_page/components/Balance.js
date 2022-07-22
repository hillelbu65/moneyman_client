import React, { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from '../../context/CurrencyContext';
import { MonthContext } from '../../context/monthContext';
import { MonthDataContext } from '../../context/monthData';
import { SheetDataContext } from '../../context/sheetData';
import { YearContext } from '../../context/yearContext';
import { calculateTheSumOfTheMonth } from '../../Data_management/CalculationUtils';
import { getMonth } from '../../Data_management/pullData';

export default function Balance() {

  const [sumData, setSumData] = useState('')

    //Year context.
    const [yearContext, setYearContext] = useContext(YearContext);
    //Month context.
    const [monthContext, setMonthContext] = useContext(MonthContext);
    //Month data context.
    const [monthDataContext, setMonthDataContext] = useContext(MonthDataContext);
    //Sheet data context.
    const [sheetDataContext, setSheetDataContext] = useContext(SheetDataContext);
    //Currency context.
    const [[currencyContext, setCurrencyContext], [itsUpdate, setItsUpdate]] = useContext(CurrencyContext);

  const getMonthData = async () => {
    const data = await getMonth(sheetDataContext.workSheetId, sheetDataContext.sheetName ,monthContext, yearContext)
    console.log(calculateTheSumOfTheMonth(data.data))
    setSumData(calculateTheSumOfTheMonth(data.data))
  }

  useEffect(() => {
    getMonthData()
  }, [monthContext, yearContext])
  

  return (
  <div className=' h-fit w-full col-start-2 col-end-8 mt-40 grid grid-cols-8'>
    <div className='
    h-20 
    w-full  
    col-start-1 
    col-end-9 
    flex
    flex-col
    place-content-center
    text-my_main
    text-3xl
    items-center
    '>
      <div className='font-bold text-my_main_contrast'>
        Expenses
      </div>
      <div className='flex flex-row justify-center items-center'>
        <div className='mt-1'>
          {currencyContext.icon}
        </div>
        {sumData} 
      </div>
     
    </div>
  </div>)
}
