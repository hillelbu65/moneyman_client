import Cookies from "js-cookie"
import React, { createContext,  useState } from "react"

export const SheetDataContext = createContext() 

export const SheetDataProvider = (props) => 
{
    const [sheetDataContext, setSheetDataContext] = useState(
        {
         workSheetId: Cookies.get('WorkSheetID'), 
         sheetName: Cookies.get('SheetName')    
        })

    return ( 
        <SheetDataContext.Provider value = {[sheetDataContext, setSheetDataContext]}>
            {props.children}
        </SheetDataContext.Provider>
    )
}