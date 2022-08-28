import React, { useContext, useState } from "react";
import { MonthContext } from "../../../context/monthContext";

export default function MonthBar() {
  //Month context.
  const [monthContext, setMonthContext] = useContext(MonthContext);
  const [Clicked, setClicked] = useState("01");
  const months = [
    "01Jan",
    "02Feb",
    "03Mar",
    "04Apr",
    "05May",
    "06Jun",
    "07Jul",
    "08Aug",
    "09Sep",
    "10Oct",
    "11Nov",
    "12Dec",
  ];

  const selections = months.map((el, index) => {
    return (
      <div className="flex">
        <div
          onClick={() => {
            setMonthContext(el[0] + el[1]);
            setClicked(el[0] + el[1]);
          }}
          className={`${
            Clicked === el[0] + el[1] ? "bg-my_main_contrast" : "bg-my_cream"
          }
          ${
            Clicked === el[0] + el[1]
              ? "text-my_cream"
              : "text-my_main_contrast"
          }
          flex 
          flex-col 
          w-16 
          h-16 
          justify-center 
          hover:bg-opacity-80 
          rounded-xl  
          font-bold 
          m-2 
          hover:font-bold`}
          key={index}
        >
          {el[2] + el[3] + el[4]}
        </div>
      </div>
    );
  });

  return (
    <div
      className="
      group 
      flex 
      fixed 
      items-center
      bottom-0
      self-center
      justify-self-center
      w-full
      h-22 
      bg-my_hover_main
      overflow-auto
      snap-center
      snap-x
      shadow-2xl
      sm:top-16
      sm:w-fit
      sm:right-16
      sm:flex-col
      sm:h-4/5
      sm:overflow-y-auto
      sm:rounded-lg
      rounded-t-md
      sm:p-0
      p-2"
    >
      {selections}
    </div>
  );
}
