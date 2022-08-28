import React, { useContext } from "react";
import { SetupContext } from "../../../../../context/SetupContext";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function MoveToButton({ moveTo, text, icon }) {
  const [step, setStep] = useContext(SetupContext);
  return (
    <div className="flex flex-row h-fit justify-end items-end">
      <button
        className="flex items-center justify-center h-10 w-fit bg-my_main_contrast text-my_cream  p-3 rounded-lg bottom-0 gap-1"
        onClick={() => setStep(moveTo)}
      >
        {icon === "f" ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
        {text}
      </button>
    </div>
  );
}
