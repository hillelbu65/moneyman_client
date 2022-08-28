import React from "react";
import { MdOutlineLightbulb } from "react-icons/md";

export default function TipPrompt({ text }) {
  return (
    <div>
      <div className="flex flex-col w-full h-fit text-my_main_contrast text-sm rounded-md p-2 shadow-md">
        <div className=" flex flex-row items-center gap-1 text-lg font-bold text-my_main">
          <MdOutlineLightbulb /> <div className="text-base -mt-1">Tip</div>
        </div>
        <div className="flex p-1 items-start w-full">{text}</div>
      </div>
    </div>
  );
}
