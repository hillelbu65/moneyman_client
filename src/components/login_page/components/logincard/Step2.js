import React from "react";
import GoogleLoginButton from "./Google-login-button";
import Input from "./Input";

export default function Step2() {
  return (
    <div
      className="
    flex 
    flex-col 
    font-normal 
    text-base
  text-my_main_contrast
    p-10 
    border-4
  border-my_main_contrast
    rounded-lg
    h-fit
    items-center
    text-start
     shadow-lg"
    >
      <span
        className=" 
    font-bold 
    text-3xl"
      >
        Your data info
      </span>
      <Input cookieName="WorkSheetID" header="Worksheet ID" />
      <Input cookieName="SheetName" header="Sheet name" />
      <Input cookieName="ClientID" header="GCP Client ID" />
      <Input cookieName="APIkey" header="GCP API key" />
      <GoogleLoginButton />
    </div>
  );
}
