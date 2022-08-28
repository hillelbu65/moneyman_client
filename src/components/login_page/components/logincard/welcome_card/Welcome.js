import React, { useContext, useEffect } from "react";
import { SetupContext } from "../../../../context/SetupContext";
import SignUp from "../SignUp";
import GCPExplain from "./steps/GCPExplain";
import Introduction from "./steps/Introduction.js";
import SheetDataExplain from "./steps/SheetDataExplain";
import Cookies from "js-cookie";
import GoogleLoginButton from "../Google-login-button";

export default function Welcome() {
  const [step, setStep] = useContext(SetupContext);

  useEffect(() => {
    if (Cookies.get("WorkSheetID") === undefined) {
      Cookies.set("WorkSheetID", "");
    }

    if (Cookies.get("SheetName") === undefined) {
      Cookies.set("SheetName", "");
    }

    if (Cookies.get("ClientID") === undefined) {
      Cookies.set("ClientID", "");
    }

    if (
      Cookies.get("WorkSheetID").length > 0 &&
      Cookies.get("SheetName").length > 0 &&
      Cookies.get("ClientID").length > 0
    ) {
      setStep("setup");
    }
  }, []);

  return (
    <div
      className="
        flex 
        flex-col 
        justify-center
        items-center
        w-screen
        h-full
      text-my_main_contrast
        sm:p-5
      bg-my_main"
    >
      {step === 0 ? <Introduction /> : ""}
      {step === 1 ? <GCPExplain /> : ""}
      {step === 2 ? <SheetDataExplain /> : ""}
      {step === 3 ? <SignUp /> : ""}
      {step === "setup" ? (
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className=" font-bold mb-4 text-2xl">Great Just click here.</h1>
          <GoogleLoginButton />
          <button onClick={() => setStep(0)}>Change info</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
