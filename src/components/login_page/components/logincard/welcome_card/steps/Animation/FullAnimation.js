import React from "react";
import Frame from "./Frame";
import Person from "./Person";

export default function FullAnimation() {
  return (
    <div className="flex flex-col  justify-end pb-9 items-center w-fit h-fit">
      <div className="flex justify-center items-center">
        {/* <Person /> */}
        <Frame />
      </div>
    </div>
  );
}
