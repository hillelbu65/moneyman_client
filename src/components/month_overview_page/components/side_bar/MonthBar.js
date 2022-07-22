import React, { useContext, useState } from 'react'
import { MonthContext } from '../../../context/monthContext';

export default function MonthBar() {
    //Month context.
    const [monthContext, setMonthContext] = useContext(MonthContext);
    const [Clicked, setClicked] = useState('01')
    const months = ['01Jan', '02Feb', '03Mar', '04Apr', '05May', '06Jun', '07Jul', '08Aug', '09Sep', '10Oct', '11Nov', '12Dec']

    const selections = months.map((el, index) => {
      return  (
          <div onClick={() => {setMonthContext(el[0] + el[1]); setClicked(el[0] + el[1]) }}
          className = {
          `${Clicked === el[0] + el[1] ? 'bg-my_main_contrast' : 'bg-my_creame'}
          ${Clicked === el[0] + el[1] ?  'text-my_creame' :'text-my_main_contrast'}
          flex 
          flex-col 
          w-16 
          h-16 
          justify-center 
          hover:bg-opacity-80 
          rounded-xl  
          font-bold m-2 
          hover:font-bold`}
          key={index}
          >
              {el[2] + el[3] + el[4]}
          </div>)
    }) 

  return (
    <div className='
    group 
    flex 
    flex-col 
    flex-shrink-0 
    fixed 
    right-16 
    top-16 
    w-fit 
    h-4/5  
    bg-my_main 
    rounded-lg 
    overflow-y-auto
    shadow-2xl'>
      <div className=''>
        {selections}
      </div>
    </div>
  )
}
