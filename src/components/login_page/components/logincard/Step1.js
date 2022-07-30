import React from "react";

export default function Step1() {
  return (
    <div
      className="
        flex 
        flex-col 
        items-start
        font-bold 
        text-5xl 
        md:text-8xl 
        w-fit 
        mt-8 
        ml-4 
      text-my_creame"
    >
      Welcome
      <div
        className="
        flex 
        flex-row 
        items-start"
      >
        <div
          className=" 
            mr-3 
            w-fit"
        >
          to
        </div>
        <div
          className=" 
            text-my_main_contrast 
            w-fit"
        >
          Moneyman
        </div>
      </div>
    </div>
  );
}
