import React, { useContext } from "react";
import { MonthContext } from "../../../context/monthContext";
import Transaction from "./Transaction";

export default function Month(props) {
  const [monthContext, setMonthContext] = useContext(MonthContext);
  const monthName =
    props.monthName[2] + props.monthName[3] + props.monthName[4];
  const transactions = props.transactions.map((transaction, index) => {
    return <Transaction key={index} data={transaction} />;
  });
  return (
    <div className="flex flex-col p-2 justify-center h-fit rounded-md gap-2 ">
      <div className="flex flex-row  items-center">
        <div className="flex h-12 w-12 bg-my_main_contrast text-my_creame rounded-md p-2 justify-center items-center font-semibold">
          {monthName}
        </div>
        {monthContext === props.monthName[0] + props.monthName[1] ? (
          <div className="flex ml-2 h-8 w-fit bg-opacity-80 bg-my_creame text-my_main_contrast rounded-md p-2 justify-center items-center">
            This month
          </div>
        ) : (
          ""
        )}
      </div>
      {transactions}
    </div>
  );
}
