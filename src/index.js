import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { BalanceProvider } from './components/context/BalanceContext';
import { MonthStateProvider } from './components/context/monthContext';
import YearStateProvider from './components/context/yearContext';
import { MonthDataProvider } from './components/context/monthData';
import { SheetDataProvider } from './components/context/sheetData';
import { PersonalSpaceProvider } from './components/context/PersonalSpace';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BalanceProvider>
    <MonthStateProvider>
      <YearStateProvider>
        <MonthDataProvider>
          <SheetDataProvider>
            <PersonalSpaceProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </PersonalSpaceProvider>
          </SheetDataProvider>
        </MonthDataProvider>
      </YearStateProvider>
    </MonthStateProvider>
  </BalanceProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
