import React, { createContext, useState } from "react";

export const SetupContext = createContext();

export const SetupProvider = (props) => {
  const [step, setStep] = useState(0);

  return (
    <SetupContext.Provider value={[step, setStep]}>
      {props.children}
    </SetupContext.Provider>
  );
};
