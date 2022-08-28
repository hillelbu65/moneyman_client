import React, { useContext } from "react";
import { SetupContext } from "../../../../../context/SetupContext";
import { MdClose } from "react-icons/md";

export default function CloseButton({ moveTo }) {
  const [step, setStep] = useContext(SetupContext);
  return (
    // <div className="flex flex-row h-fit justify-end items-end">
    <button
      className="flex items-center justify-center h-10 w-10 bg-my_main_contrast text-my_cream font-bold p-3 rounded-lg bottom-0 gap-1"
      onClick={() => setStep(moveTo)}
    >
      <MdClose />
    </button>
    // </div>
  );
}
