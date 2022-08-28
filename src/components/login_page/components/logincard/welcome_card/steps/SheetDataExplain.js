import React from "react";
import MoveToButton from "../utils_components/MoveToButton";
import Time from "../utils_components/Time";
import TipPrompt from "../utils_components/TipPrompt";
import { motion } from "framer-motion";
import CloseButton from "../utils_components/CloseButton";

export default function SheetDataExplain() {
  const tipText = "Don't Worry Be Happy.";
  return (
    <div className="flex flex-col text-start sm:rounded-lg sm:w-4/6 sm:h-11/12 w-full h-full bg-my_cream bg-opacity-90 p-7">
      <span className="text-7xl font-bold  text-my_main">
        2<span className="text-4xl">of</span>2
      </span>
      <h1 className="font-bold mt-4 text-2xl mb-1">Sheet data Setup</h1>
      <Time numOfMinuets={"1-2"} />

      <motion.div
        className="mt-3 overflow-y-auto h-full mb-2 w-full p-2"
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        exit={{ x: 50 }}
      >
        <div className="flex flex-col items-start gap-3 sm:text-xl">
          <div>
            1. Go to google sheets <span></span>
            <a
              className="text-my_main"
              href="https://docs.google.com/spreadsheets/u/0/?tgif=d"
            >
              here
            </a>
            <span></span> and copy your spreadsheet ID from the URL.
          </div>
          <div>2. In your spreadsheet copy your sheet name.</div>
          <TipPrompt text={tipText} />
        </div>
      </motion.div>
      <div className="flex gap-2 justify-end">
        <CloseButton moveTo={0} />
        <MoveToButton moveTo={1} icon={"b"} />
        <MoveToButton moveTo={3} icon={"f"} />
      </div>
    </div>
  );
}
