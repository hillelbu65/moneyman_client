import React, { useContext } from "react";
import Billdetailspage from "../bill_page_details/Billdetailspage";
import { BillDetailsContext } from "../context/BillDetailsContext";
import { PersonalSpaceContext } from "../context/PersonalSpace";
import PersonalSpacePage from "../personal_spase/PersonalSpacePage";
import Balance from "./components/Balance";
import Categories from "./components/categories/Categories";
import ChartMonth from "./components/chart/ChartMonth";
import MonthBar from "./components/side_bar/MonthBar";
import NavBarAndTools from "./components/top_bar/NavBarAndTools";

export default function MonthOverviewPage() {
  const [personalSpaceContext, setPersonalSpaceContext] =
    useContext(PersonalSpaceContext);
  const [
    [billDetailsOn, setBillDetailsOn],
    [billCategory, setBillCategory],
    [billName, setBillName],
  ] = useContext(BillDetailsContext);

  return (
    <div className="p-0 flex flex-col sm:p-10 sm:grid sm:grid-cols-8 gap-3">
      <NavBarAndTools />
      <Balance />
      <MonthBar />
      <ChartMonth />
      <Categories />

      {/* Space Holder */}
      <div className=" h-24 w-ful col-start-1 col-end-9"></div>
      {/* Space Holder */}

      {personalSpaceContext ? <PersonalSpacePage /> : ""}
      {billDetailsOn ? <Billdetailspage /> : ""}
    </div>
  );
}
