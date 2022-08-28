/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function Time({ numOfMinuets }) {
  return (
    <div className="flex flex-row bg-my_main_contrast text-my_cream w-fit h-fit rounded-md p-2 items-center justify-center gap-1 ">
      <div className="">
        <AiOutlineClockCircle />
      </div>
      <div className=" text-xs">
        <span>{numOfMinuets}</span>
      </div>
    </div>
  );
}
