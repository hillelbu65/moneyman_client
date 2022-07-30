import React, { createContext, useState } from "react";

export const MonthDataContext = createContext();

export const MonthDataProvider = (props) => {
  const [monthDataContext, setMonthDataContext] = useState([]);

  return (
    <MonthDataContext.Provider value={[monthDataContext, setMonthDataContext]}>
      {props.children}
    </MonthDataContext.Provider>
  );
};
