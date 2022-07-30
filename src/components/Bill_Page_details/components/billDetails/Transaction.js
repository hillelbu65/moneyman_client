import React, { useContext } from "react";
import { CurrencyContext } from "../../../context/CurrencyContext";

export default function Transaction(props) {
  const [[currencyContext, setCurrencyContext], [itsUpdate, setItsUpdate]] =
    useContext(CurrencyContext);
  const day = props.data.date[0] + props.data.date[1];
  return (
    <div className="flex flex-row w-full  items-center p-2 shadow-sm rounded-md gap-3 bg-my_creame">
      <span className="flex h-8 w-8 bg-my_main_contrast rounded-md items-center justify-center text-my_creame ">
        {day}
      </span>
      <span className="flex flex-row justify-center items-center">
        <span className="mt-1">{currencyContext.icon}</span> {props.data.amount}{" "}
      </span>
    </div>
  );
}
