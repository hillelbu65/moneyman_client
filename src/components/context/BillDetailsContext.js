
import React, { createContext,  useState } from "react"

export const BillDetailsContext = createContext() 

export const  BillDetailsProvider = (props) => 
{
    const [billDetailsOn, setBillDetailsOn] = useState(false)
    const [billCategory, setBillCategory] = useState('')
    const [billName, setBillName] = useState('')

    return ( 
        <BillDetailsContext.Provider value= {[[billDetailsOn, setBillDetailsOn], [billCategory, setBillCategory], [billName, setBillName]]}>
            {props.children}
        </BillDetailsContext.Provider>
    )
}
