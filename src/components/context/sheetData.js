import React, { createContext,  useState } from "react"

export const SheetDataContext = createContext() 

export const SheetDataProvider = (props) => 
{
    const [sheetDataContext, setSheetDataContext] = useState({})

    return ( 
        <SheetDataContext.Provider value = {[sheetDataContext, setSheetDataContext]}>
            {props.children}
        </SheetDataContext.Provider>
    )
}