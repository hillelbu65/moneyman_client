import React, { createContext, useState } from "react";

export const YearContext = createContext({})

export default function YearStateProvider(props) {

  const [yearContext, setYearContext] = useState(new Date().getFullYear().toString());

  return (
    <div>
        <YearContext.Provider value={[yearContext, setYearContext]}>
            {props.children}
        </YearContext.Provider>
    </div>
  )
}