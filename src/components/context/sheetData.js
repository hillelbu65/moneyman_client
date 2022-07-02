import React, { createContext,  useState } from "react"

export const SheetDataContext = createContext() 

export const SheetDataProvider = (props) => 
{
    const [sheetDataContext, setSheetDataContext] = useState(
        {
         workSheetId:'1oHvBvgpsMOUHSDVUocOtGLjJyRj6p6H_krfkSX2UgUs', 
         sheetName:'test'    
        })

    return ( 
        <SheetDataContext.Provider value = {[sheetDataContext, setSheetDataContext]}>
            {props.children}
        </SheetDataContext.Provider>
    )
}