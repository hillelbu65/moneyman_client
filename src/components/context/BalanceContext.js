import React, { createContext, useState } from "react";

export const BalanceContext = createContext();

export const BalanceProvider = (props) => {
  const [balanceContext, setBalanceContext] = useState("0000");

  return (
    <BalanceContext.Provider value={[balanceContext, setBalanceContext]}>
      {props.children}
    </BalanceContext.Provider>
  );
};
