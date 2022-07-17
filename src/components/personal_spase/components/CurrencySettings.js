import React, { useContext } from 'react'
import { CurrencyContext } from '../../context/CurrencyContext'
import {TbCurrencyShekel, TbCurrencyRupee, TbCurrencyDollar, TbCurrencyEuro, TbCurrencyFrank, TbCurrencyPound, TbCurrencyYen, TbCurrencyRiyal, TbCurrencyBitcoin, TbCurrencyWon} from 'react-icons/tb'
import Cookies from 'js-cookie';


export default function CurrencySettings() {
    const [[currencyContext, setCurrencyContext], [itsUpdate, setItsUpdate]] = useContext(CurrencyContext);

  return (
    <div className='flex flex-col p-3'>
        <span className='font-bold text-2xl ml-2 '>
            Currency settings
        </span>
        <span className='ml-2'>
            Chuse your currency.
        </span>
        <div className='flex flex-col gap-3 mt-4 p-2'>
            <div className = {`flex flex-row items-center p-2 shadow-sm  rounded-md gap-3 ${currencyContext.selection === 'Shekel' ?  'bg-my_main_contrast text-my_creame font-bold' : ' bg-my_creame hover:bg-opacity-80' }`}
            onClick={() => {Cookies.set('Currency', 'Shekel'); setItsUpdate('Shekel')}}>
                <span className = 'flex h-8 w-8 bg-my_main_contrast rounded-md items-center justify-center text-my_creame text-xl'><TbCurrencyShekel/></span>
                Shekel
            </div>
            <div className = {`flex flex-row items-center p-2 shadow-sm   rounded-md gap-3 ${currencyContext.selection === 'Dolar' ?  'bg-my_main_contrast text-my_creame font-bold' : ' bg-my_creame hover:bg-opacity-80' }`}
            onClick={() => {Cookies.set('Currency', 'Dolar'); setItsUpdate('Dolar')}}>
                <span className = 'flex h-8 w-8 bg-my_main_contrast rounded-md items-center place-content-center  text-my_creame text-xl'><TbCurrencyDollar/></span>
                Dolar
            </div>
            <div className = {`flex flex-row items-center p-2 shadow-sm   rounded-md gap-3 ${currencyContext.selection === 'Euro' ?  'bg-my_main_contrast text-my_creame font-bold' : ' bg-my_creame hover:bg-opacity-80' }`}
            onClick={() => {Cookies.set('Currency', 'Euro'); setItsUpdate('Euro')}}>
                <span className = 'flex h-8 w-8 bg-my_main_contrast rounded-md items-center justify-center text-my_creame text-xl'><TbCurrencyEuro/></span>
                Euro
            </div>
            <div className = {`flex flex-row items-center p-2 shadow-sm   rounded-md gap-3 ${currencyContext.selection === 'Rupee' ?  'bg-my_main_contrast text-my_creame font-bold' : ' bg-my_creame hover:bg-opacity-80' }`}
            onClick={() => {Cookies.set('Currency', 'Rupee'); setItsUpdate('Rupee')}}>
                <span className = 'flex h-8 w-8 bg-my_main_contrast rounded-md items-center justify-center text-my_creame text-xl'><TbCurrencyRupee/></span>
                Rupee
            </div>
            <div className = {`flex flex-row items-center p-2 shadow-sm   rounded-md gap-3 ${currencyContext.selection === 'Pound' ?  'bg-my_main_contrast text-my_creame font-bold' : ' bg-my_creame hover:bg-opacity-80' }`}
            onClick={() => {Cookies.set('Currency', 'Pound'); setItsUpdate('Pound')}}>
                <span className = 'flex h-8 w-8 bg-my_main_contrast rounded-md items-center justify-center text-my_creame text-xl'><TbCurrencyPound/></span>
                Pound
            </div>
            <div className = {`flex flex-row items-center p-2 shadow-sm   rounded-md gap-3 ${currencyContext.selection === 'Frank' ?  'bg-my_main_contrast text-my_creame font-bold' : ' bg-my_creame hover:bg-opacity-80' }`}
            onClick={() => {Cookies.set('Currency', 'Frank'); setItsUpdate('Frank')}}>
                <span className='flex h-8 w-8 bg-my_main_contrast rounded-md items-center justify-center text-my_creame text-xl'><TbCurrencyFrank/></span>
                Frank
            </div>
            <div className = {`flex flex-row items-center p-2 shadow-sm   rounded-md gap-3 ${currencyContext.selection === 'Yen' ?  'bg-my_main_contrast text-my_creame font-bold' : ' bg-my_creame hover:bg-opacity-80' }`}
            onClick={() => {Cookies.set('Currency', 'Yen'); setItsUpdate('Yen')}}>
                <span className = 'flex h-8 w-8 bg-my_main_contrast rounded-md items-center justify-center text-my_creame text-xl'><TbCurrencyYen/></span>
                Yen
            </div>
            <div className = {`flex flex-row items-center p-2 shadow-sm   rounded-md gap-3 ${currencyContext.selection === 'Riyal' ?  'bg-my_main_contrast text-my_creame font-bold' : ' bg-my_creame hover:bg-opacity-80' }`}
            onClick={() => {Cookies.set('Currency', 'Riyal'); setItsUpdate('Riyal')}}>
                <span className = 'flex h-8 w-8 bg-my_main_contrast rounded-md items-center justify-center text-my_creame text-xl'><TbCurrencyRiyal/></span>
                Riyal
            </div>
            <div className = {`flex flex-row items-center p-2 shadow-sm   rounded-md gap-3 ${currencyContext.selection === 'Bitcoin' ?  'bg-my_main_contrast text-my_creame font-bold' : ' bg-my_creame hover:bg-opacity-80' }`}
            onClick={() => {Cookies.set('Currency', 'Bitcoin'); setItsUpdate('Bitcoin')}}>
                <span className = 'flex h-8 w-8 bg-my_main_contrast rounded-md items-center justify-center text-my_creame text-xl'><TbCurrencyBitcoin/></span>
                Bitcoin
            </div>
            <div className = {`flex flex-row items-center p-2 shadow-sm   rounded-md gap-3 ${currencyContext.selection === 'Won' ?  'bg-my_main_contrast text-my_creame font-bold' : ' bg-my_creame hover:bg-opacity-80' }`}
            onClick={() => {Cookies.set('Currency', 'Won'); setItsUpdate('Won')}}>
                <span className = 'flex h-8 w-8 bg-my_main_contrast rounded-md items-center justify-center text-my_creame text-xl'><TbCurrencyWon/></span>
                Won
            </div>
        </div>
    </div>
  )
}
