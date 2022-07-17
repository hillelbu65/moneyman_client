import React, { createContext,  useState } from "react"

export const CurrencyContext = createContext() 

export const  CurrencyProvider = (props) => 
{
    const [currencyContext, setCurrencyContext] = useState('')

    return ( 
        <CurrencyContext.Provider value = {[currencyContext, setCurrencyContext]}>
            {props.children}
        </CurrencyContext.Provider>
    )
}