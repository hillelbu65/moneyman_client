import React, { useContext } from "react";
import { BillDetailsContext } from "../../../context/BillDetailsContext";
import { CurrencyContext } from "../../../context/CurrencyContext";

export default function BillCard(props) {
  const [[currencyContext, setCurrencyContext], [itsUpdate, setItsUpdate]] =
    useContext(CurrencyContext);
  const [
    [billDetailsOn, setBillDetailsOn],
    [billCategory, setBillCategory],
    [billName, setBillName],
  ] = useContext(BillDetailsContext);

  return (
    <div
      className="
    w-40
    h-auto 
    rounded-lg 
    ml-4
    group
    duration-100 
  bg-my_main
    bg-opacity-90
  text-my_text_color"
      onClick={() => {
        setBillDetailsOn(true);
        setBillCategory(props.data.category);
        setBillName(props.data.name);
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center font-bold m-2 gap-1 text-lg">
          <div className="-mr-1 mt-1">{currencyContext.icon}</div>
          <div>{props.data.sum}</div>
        </div>
      </div>
      <div
        className=" 
        flex 
        flex-col 
        w-40
        h-12 
        rounded-lg 
        rounded-t-none 
        place-content-center
       text-my_main_contrast
       bg-my_creame
        group-hover:bg-opacity-80
        font-medium
        shadow-lg"
        onClick={() => {
          setBillDetailsOn(true);
        }}
      >
        <span>{props.data.name}</span>
      </div>
    </div>
  );
}
