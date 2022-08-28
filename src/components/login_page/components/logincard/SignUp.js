import React from "react";
import Input from "./Input";
import { motion } from "framer-motion";

export default function SignUp() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="flex flex-col p-4 sm:p-0  sm:rounded-lg sm:w-4/6 sm:h-11/12 w-full h-full bg-opacity-90  text-my_main_contrast rounded-lg items-center justify-center shadow-lg bg-my_cream">
      <motion.div
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        exit={{ x: 50 }}
        className="flex flex-col justify-center items-center gap-2 sm:w-fit w-full p-2"
      >
        <span className="flex text-start font-bold text-3xl w-full mb-3">
          Your data info
        </span>
        <div className="flex sm:flex-row flex-col w-full text-start gap-2">
          <Input cookieName="WorkSheetID" header="Worksheet ID" />
          <Input cookieName="SheetName" header="Sheet name" />
        </div>
        <div className="flex flex-col w-full text-start gap-2">
          <Input cookieName="ClientID" header="GCP Client ID" />
        </div>
        <div className="flex w-full">
          <button
            className="flex flex-row items-center gap-2 bg-my_main_contrast bg-opacity-90 text-my_cream p-3 rounded-lg hover:bg-opacity-100"
            onClick={refreshPage}
          >
            Complete
          </button>
        </div>
      </motion.div>
    </div>
  );
}
