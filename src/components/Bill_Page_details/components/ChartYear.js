import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { YearContext } from "../../context/yearContext";
import { MonthContext } from "../../context/monthContext";
import { MonthDataContext } from "../../context/monthData";
import { SheetDataContext } from "../../context/sheetData";
import { getMonth, getYearBillData } from "../../data_management/pullData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartYear(props) {
  //Year context.
  const [yearContext, setYearContext] = useContext(YearContext);
  //Month context.
  const [monthContext, setMonthContext] = useContext(MonthContext);
  //Month data context.
  const [monthDataContext, setMonthDataContext] = useContext(MonthDataContext);
  //Sheet data context.
  const [sheetDataContext, setSheetDataContext] = useContext(SheetDataContext);

  const [dataCHART, setDataCHART] = useState({
    labels: ["padding", "the", "chart"],
    datasets: [
      {
        lebal: "padding",
        data: [1, 2, 3],
      },
    ],
  });

  const getData = async () => {
    const data = await getYearBillData(
      sheetDataContext.workSheetId,
      sheetDataContext.sheetName,
      props.billName,
      yearContext
    );

    const dataChart = {
      labels: data.arrayOfMonthsData.map((el) => el.month),
      datasets: [
        {
          label: yearContext,
          data: data.arrayOfMonthsData.map((el) => el.sum),
          backgroundColor: "#824600",
          fill: true,

          borderWidth: 1,
          borderRadius: 10,
        },
      ],
    };
    return dataChart;
  };

  useEffect(() => {
    getData().then((data) => setDataCHART(data));
  }, [yearContext, monthContext]);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
      legend: { display: false },
    },
    scales: {
      y: {
        display: false,

        ticks: {
          display: false,
          font: {
            size: 1,
          },
        },
        grid: {
          display: false,
        },
      },
      x: {
        color: "white",
        ticks: {
          color: "#824600",
          font: {
            size: 11,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full col-start-2 col-end-8 rounded-lg text-my_text_color p-6 border-my_main">
      <Bar data={dataCHART} options={options} />
    </div>
  );
}
