import React from 'react'
import BillCard from './BillCard';

export default function Category(props) {

    const bills = props.data.map((bill, index) => {
        return (<BillCard key={index} data={bill} />)
    })

    return (
        <div className='category mb-3 flex flex-col'>
            <div className='flex flex-row p-4'>
                <h1 className='flex-start self-start font-bold text-3xl text-my_main_contrast'>{props.data[0].category}</h1>
            </div>
            
            <div className='flex flex-row overflow-x-auto h-32 place-items-center'>
            {bills}
            </div> 
        </div>
    ) 
}
