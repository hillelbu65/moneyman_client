import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";
import {
  TbCurrencyShekel,
  TbCurrencyRupee,
  TbCurrencyDollar,
  TbCurrencyEuro,
  TbCurrencyFrank,
  TbCurrencyPound,
  TbCurrencyYen,
  TbCurrencyRiyal,
  TbCurrencyBitcoin,
  TbCurrencyWon,
} from "react-icons/tb";

export const CurrencyContext = createContext();

export const CurrencyProvider = (props) => {
  const [currencyContext, setCurrencyContext] = useState("");
  const [itsUpdate, setItsUpdate] = useState("");

  useEffect(() => {
    const icons = [
      "Shekel",
      <TbCurrencyShekel />,
      "Rupee",
      <TbCurrencyRupee />,
      "Dolar",
      <TbCurrencyDollar />,
      "Euro",
      <TbCurrencyEuro />,
      "Frank",
      <TbCurrencyFrank />,
      "Pound",
      <TbCurrencyPound />,
      "Yen",
      <TbCurrencyYen />,
      "Riyal",
      <TbCurrencyRiyal />,
      "Bitcoin",
      <TbCurrencyBitcoin />,
      "Won",
      <TbCurrencyWon />,
    ];
    const currency = Cookies.get("Currency");
    const find = icons.findIndex((el) => el === currency);
    const index = find;
    const icon = icons[index + 1];
    setCurrencyContext({ icon: icon, selection: currency });
  }, [itsUpdate]);

  return (
    <CurrencyContext.Provider
      value={[
        [currencyContext, setCurrencyContext],
        [itsUpdate, setItsUpdate],
      ]}
    >
      {props.children}
    </CurrencyContext.Provider>
  );
};
