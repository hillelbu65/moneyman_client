import React, { useContext, useEffect, useState } from 'react'
import { BillDetailsContext } from '../../../context/BillDetailsContext';
import { MonthContext } from '../../../context/monthContext';
import { SheetDataContext } from '../../../context/sheetData';
import { YearContext } from '../../../context/yearContext';
import { getYearBillData } from '../../../Data_management/pullData';
import Month from './Month';

export default function Months() {
    const [yearData, setYearData] = useState([]) 

    const [[billDetailsOn, setBillDetailsOn], [billCategory, setBillCategory], [billName, setBillName]] =useContext(BillDetailsContext)
    //Year context.
    const [yearContext, setYearContext] = useContext(YearContext);
    //Month context.
    const [monthContext, setMonthContext] = useContext(MonthContext);
    //Sheet data context.
    const [sheetDataContext, setSheetDataContext] = useContext(SheetDataContext);
  
    const getData = async () => {
      const response = await getYearBillData(sheetDataContext.workSheetId, sheetDataContext.sheetName, billName, yearContext)
      setYearData(response.arrayOfMonthsData)
      console.log(response)
      return response
    }
  
    useEffect(() => {
      getData()
    }, [])
  
    const months = yearData.map((element, index) => {
        const monthsNames = ['01Jan', '02Feb', '03Mar', '04Apr', '05May', '06Jun', '07Jul', '08Aug', '09Sep', '10Oct', '11Nov', '12Dec'];
        
        const monthName = monthsNames.filter((el) => {
           if (el[0] + el[1] === element.month) {
            return el
           }
        })
        console.log(monthName)
        return (<Month key = {index} transactions = {element.bills} monthName = {monthName[0]}/>)
    })

  return (
    <div className='flex flex-col p-2s justify-center gap-6'>
        {months}
    </div>
  )
}
