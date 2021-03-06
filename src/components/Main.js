import React, { useState } from "react";
import { Route, Routes } from "react-router";
import LoginPage from "./login_page/LoginPage";
import MonthOverviewPage from "./month_overview_page/MonthOverviewPage";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/monthoverview" element={<MonthOverviewPage />} />
      </Routes>
    </div>
  );
}
