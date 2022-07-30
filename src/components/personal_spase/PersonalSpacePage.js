import React, { useContext } from "react";
import { MdOutlineClear } from "react-icons/md";
import { PersonalSpaceContext } from "../context/PersonalSpace";
import CurrencySettings from "./components/CurrencySettings";
import DataInfo from "./components/DataInfo";

export default function PersonalSpacePage() {
  const [personalSpaceContext, setPersonalSpaceContext] =
    useContext(PersonalSpaceContext);

  return (
    <div
      className=" 
    fixed 
    left-0 
    top-0 
    w-full 
    h-full 
    bg-black 
    bg-opacity-40 
    grid 
    grid-cols-8 
    items-center"
    >
      <div
        className="
        flex 
        flex-col 
        justify-end 
        fixed 
        w-full
        h-full 
        sm:w-3/4 
        sm:h-5/6 
        sm:rounded-lg 
        bg-my_main
        justify-self-center 
        shadow-2xl 
        animate-comeUp"
      >
        <div className="h-full w-full">
          <div
            onClick={() => setPersonalSpaceContext(false)}
            className="
                absolute
                flex 
                flex-row 
                top-5
                left-5
                w-12 
                h-12 
                justify-center 
                items-center 
                text-my_main_contrast
                bg-my_creame 
                rounded-lg 
                text-2xl 
                hover:text-3xl 
                hover:bg-opacity-80"
          >
            <MdOutlineClear />
          </div>
        </div>

        <div className="flex flex-col bg-opacity-50 w-full h-5/6 rounded-b-lg sm:p-4 text-my_main_contrast">
          <div className="flex flex-col md:w-2/6 text-start overflow-y-auto gap-8">
            <DataInfo />
            <CurrencySettings />
          </div>
        </div>
      </div>
    </div>
  );
}
