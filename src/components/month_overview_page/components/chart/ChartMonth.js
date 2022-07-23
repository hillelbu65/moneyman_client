import React, { useContext, useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { YearContext } from '../../../context/yearContext';
import { MonthContext } from '../../../context/monthContext';
import { MonthDataContext } from '../../../context/monthData';
import { SheetDataContext } from '../../../context/sheetData';
import { getMonth } from '../../../Data_management/pullData';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartMonth () {
  //Year context.
  const [yearContext, setYearContext] = useContext(YearContext);
  //Month context.
  const [monthContext, setMonthContext] = useContext(MonthContext);
  //Month data context.
  const [monthDataContext, setMonthDataContext] = useContext(MonthDataContext);
  //Sheet data context.
  const [sheetDataContext, setSheetDataContext] = useContext(SheetDataContext);
      
  const [datae, setDatae] = useState({
    labels: ['padding', 'the', 'chart'],
    datasets: [{
    lebal: "padding",
    data: [1, 2, 3]
    }]
  })

  const getMonthData = async () => {
    const data = await getMonth(sheetDataContext.workSheetId, sheetDataContext.sheetName ,monthContext, yearContext)
    setMonthDataContext(data)

    const dataTo = {    
      labels: data.data.map((el) => el.category),
      datasets: [{
      label: "Categories",
      data: data.data.map((el) => el.sum),
      backgroundColor: '#824600',
      fill: true,

      borderWidth: 1,
      borderRadius: 10
      }]
    }
    return dataTo
  }

  useEffect(() => {
    getMonthData().then(data => setDatae(data))
  }, [yearContext, monthContext])

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
      legend: {display: false}
    },
    scales: {
      y: {
        display: false,

        ticks: {
          display: false,
          font: {
            size: 1
          }
        },
        grid: {
          display: false,
        }
      },
      x: {
       color: 'white',
        ticks: {
          color: '#824600',
          font: {
            size: 11
          }
        },
        grid: {
          display: false,
        }
      },
    }
  };

  return (
    <div className='w-full col-start-2 col-end-8 mt-10 rounded-lg text-my_text_color p-6 border-my_main'>
        <Bar data = {datae} options={options} />
    </div>
  )
}
