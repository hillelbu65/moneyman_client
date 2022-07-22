import React, { useContext } from 'react'
import Billdetailspage from '../Bill_Page_details/Billdetailspage';

import { BillDetailsContext } from '../context/BillDetailsContext';
import { PersonalSpaceContext } from '../context/PersonalSpace';
import PersonalSpacePage from '../personal_spase/PersonalSpacePage';
import Balance from './components/Balance';
import Categories from './components/categories/Categories';
import ChartMonth from './components/chart/ChartMonth';
import MonthBar from './components/side_bar/MonthBar';
import NavBarAndTools from './components/top_bar/NavBarAndTools'

export default function MonthOverviwePage() {
  const [personalSpaceContext, setPersonalSpaceContext] = useContext(PersonalSpaceContext);
  const [[billDetailsOn, setBillDetailsOn], [billCategory, setBillCategory], [billName, setBillName]] = useContext(BillDetailsContext);

  
  return (
    <div className='p-10 grid grid-cols-8 gap-3'>
        <NavBarAndTools/> 
        <Balance/>
        <MonthBar/>
        <ChartMonth/>
        <Categories/>
        {personalSpaceContext ? <PersonalSpacePage/>  : ''}
        {billDetailsOn ? <Billdetailspage/> : ''}
    </div>
  )
}
