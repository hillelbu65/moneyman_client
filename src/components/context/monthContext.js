import React, { createContext,  useState } from "react"

export const MonthContext = createContext() 

export const  MonthStateProvider = (props) => 
{
    const [monthContext, setMonthContext] = useState('01')

    return ( 
        <MonthContext.Provider value = {[monthContext, setMonthContext]}>
            {props.children}
        </MonthContext.Provider>
    )
}
