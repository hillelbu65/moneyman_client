import React from "react";
import ConfigurationValue from "../utils_components/ConfigurationValue";
import MoveToButton from "../utils_components/MoveToButton";
import Time from "../utils_components/Time";
import TipPrompt from "../utils_components/TipPrompt";
import { motion } from "framer-motion";
import CloseButton from "../utils_components/CloseButton";
export default function GCPExplain() {
  const tipText =
    "Keep your client ID and your API key somewhere safe. This app requires re-authentication every 7 days. If you intend to use this GUI you can copy and paste it from your project's console.";
  return (
    <div className="flex flex-col text-start sm:rounded-lg sm:w-4/6 sm:h-11/12 w-full h-full bg-my_cream bg-opacity-90 p-7">
      <span className="text-7xl font-bold -ml-2 text-my_main">
        1<span className="text-xl">of</span>2
      </span>
      <h1 className="font-bold mt-4 text-xl mb-1">GCP Setup </h1>
      <Time numOfMinuets={"5-7"} />

      <motion.div
        className="mt-3 overflow-y-auto h-full mb-2 w-full p-2"
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        exit={{ x: 50 }}
      >
        <div className="flex flex-col items-start gap-3 sm:text-xl">
          <div>
            1. Go to google cloud platform <span></span>
            <a className="text-my_main" href="https://cloud.google.com/">
              here
            </a>
            <span></span> and create an account.
          </div>

          <div className="flex flex-col w-full  gap-3 rounded-md p-1">
            2. Create a new project. that will require some configurations:{" "}
            <div className="flex flex-col gap-2 ">
              <ConfigurationValue keyName={"User Type"} value={"External"} />
              <ConfigurationValue keyName={"App Name"} value={"Anything"} />
              <ConfigurationValue
                keyName={"User support email"}
                value={"Your email"}
              />
              <ConfigurationValue
                keyName={" Authorized domains "}
                value={"moneymangui.com"}
                note={
                  "You can add more URLs if it's necessary for our case it's not."
                }
              />
              <ConfigurationValue keyName={"Scopes"} value={"Skip for now."} />
              <ConfigurationValue
                keyName={"Test users"}
                value={
                  "Any email that you want to give access to login to the app."
                }
              />
            </div>
          </div>

          <div>
            3. In your new project console go to "Library" and enable google
            sheet API".
          </div>
          <div className="flex flex-col w-full  gap-3 rounded-md p-1">
            4. In your new project go to "Credentials" create new client ID.{" "}
            <div className="flex flex-col gap-2 ">
              <ConfigurationValue
                keyName={"Application type"}
                value={"Web application"}
              />
              <ConfigurationValue keyName={"Name"} value={"Anything"} />
              <ConfigurationValue
                keyName={"Authorized JavaScript origins"}
                value={"https://www.dmoneymangui.com"}
                note={
                  "You can add more URLs if it's necessary for our case it's not."
                }
              />
              <ConfigurationValue
                keyName={"Authorized redirect URIs"}
                value={"https://www.dmoneymangui.com"}
                note={
                  "You can add more URIs if it's necessary for our case it's not."
                }
              />
            </div>
            <div>
              5. In your new project go to "Credentials" create new API key.
            </div>
          </div>
          <TipPrompt text={tipText} />
        </div>
      </motion.div>
      <div className="flex gap-2 justify-end items-center">
        <CloseButton moveTo={0} />
        <MoveToButton moveTo={0} icon={"b"} />
        <MoveToButton moveTo={2} icon={"f"} />
      </div>
    </div>
  );
}
