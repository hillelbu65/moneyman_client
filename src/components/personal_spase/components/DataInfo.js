import React from "react";
import Input from "../../login_page/components/logincard/Input";

export default function DataInfo() {
  return (
    <div className="flex flex-col p-3">
      <span className="font-bold text-2xl ml-2 ">Your data info</span>
      <span className="ml-2">Update your data by typing new values.</span>
      <div>
        <Input cookieName="WorkSheetID" header="Worksheet ID" />
        <Input cookieName="SheetName" header="Sheet name" />
        <Input cookieName="ClientID" header="GCP Client ID" />
        <Input cookieName="APIkey" header="GCP API key" />
      </div>
    </div>
  );
}
