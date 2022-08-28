import React, { useContext } from "react";
import { SetupContext } from "../../../../../context/SetupContext";
import MyCard from "../../../MyCard";
import FullAnimation from "./Animation/FullAnimation";

export default function Introduction() {
  const [step, setStep] = useContext(SetupContext);
  return (
    <div>
      <div className="flex flex-col sm:rounded-lg w-screen h-screen p-7 items-center justify-center">
        <div className=" bg-black">
          <div className="flex flex-row justify-center items-center text-center top-5 left-5 absolute text-my_cream text-2xl font-bold">
            Moneyman
          </div>
          <div className="flex gap-2 absolute top-4 right-2">
            <button
              className="flex justify-center items-start bg-my_main_contrast h-10 w-fit p-2 text-my_cream rounded-lg hover:shadow-2xl "
              onClick={() => setStep(1)}
            >
              Get started
            </button>
            <button
              className="h-10 w-fit p-2 rounded-lg text-my_main_contrast"
              onClick={() => setStep(3)}
            >
              Log In
            </button>
          </div>
        </div>

        <div className="flex bg-slate-500"></div>
        <div className="absolute bottom-0">
          <FullAnimation />
        </div>
      </div>
      <MyCard />
    </div>
  );
}
