import React from "react";
import Months from "./Months";

export default function BillView() {
  return (
    <div className="flex flex-col col-start-2 col-end-8 h-fit ">
      <Months />
    </div>
  );
}
