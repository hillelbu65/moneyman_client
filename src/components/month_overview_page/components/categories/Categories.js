import React, { useContext, useEffect, useState } from "react";
import { MonthContext } from "../../../context/monthContext";
import { MonthDataContext } from "../../../context/monthData";
import { SheetDataContext } from "../../../context/sheetData";
import { YearContext } from "../../../context/yearContext";
import { getMonth } from "../../../data_management/pullData";
import Category from "./Category";

export default function Categories() {
  const [data, setData] = useState([]);
  //Year context.
  const [yearContext, setYearContext] = useContext(YearContext);
  //Month context.
  const [monthContext, setMonthContext] = useContext(MonthContext);
  //Month data context.
  const [monthDataContext, setMonthDataContext] = useContext(MonthDataContext);
  //Sheet data context.
  const [sheetDataContext, setSheetDataContext] = useContext(SheetDataContext);

  const getDataFromGoogle = async () => {
    const response = await getMonth(
      sheetDataContext.workSheetId,
      sheetDataContext.sheetName,
      monthContext,
      yearContext
    );
    setData(response.data);
  };
  useEffect(() => {
    getDataFromGoogle();
  }, [monthContext, yearContext]);

  const categories = data.map((category, index) => {
    return <Category key={index} data={category.sub_categories_data} />;
  });

  return (
    <div className="w-full flex flex-col sm:col-start-2 sm:col-end-8">
      {categories}
    </div>
  );
}
