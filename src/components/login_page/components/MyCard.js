import React, { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineQuestion } from "react-icons/ai";
import { BsGithub, BsMailbox } from "react-icons/bs";

export default function MyCard() {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const elementRefPopup = useRef(null);

  const handleClickOutside = (e) => {
    if (!elementRefPopup.current.contains(e.target)) {
      setPopup(false);
      console.log("outside");
    }
  };

  return (
    <div className="flex absolute bottom-0 w-screen h-fit p-2 items-center sm:justify-end justify-center">
      {/*Button*/}
      {popup ? (
        " "
      ) : (
        <div className="flex justify-end w-full">
          <div
            className="flex self-end bg-my_main_contrast justify-center items-center text-xl text-my_cream rounded-xl h-12 w-12"
            onClick={() => setPopup(!popup)}
          >
            {popup ? <MdClose /> : <AiOutlineQuestion />}
          </div>
        </div>
      )}

      {/*Popup*/}
      {popup ? (
        <div>
          <div
            ref={elementRefPopup}
            className="flex bg-my_main_contrast p-3 justify-center items-center rounded-xl w-80 animate-comeUp"
          >
            <div className=" text-my_cream font-semibold justify-start text-start w-full">
              <div className="flex flex-row gap-1 items-end">
                <img
                  className=" rounded-lg w-12 h-12"
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQErcrxahwrs2g/profile-displayphoto-shrink_400_400/0/1655578772067?e=1663804800&v=beta&t=GOMowUnRdh8xloHbHgUSohyTOO5Y7SWE4xQ9owbRLwM"
                  alt="This app developer"
                />
                <div className="font-bold text-lg bottom-0">Hillel Dror</div>
              </div>

              <div className="flex flex-col text-sm gap-2">
                <p>
                  This app is a GUI for moneyman. Please feel free to suggest
                  features or ask me any question.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row w-fit rounded-md justify-center items-center gap-2">
                    <div className=" w-fit h-fit p-2 rounded-md justify-center items-center text-xl">
                      <BsMailbox />
                    </div>
                    <p>hillelbu65@gmail.com</p>
                  </div>
                  <div className="flex flex-row bg-my_main hover:bg-my_hover_main text-my_main_contrast p-2 rounded-md justify-center items-center gap-2">
                    <a
                      className="flex flex-row gap-2"
                      href="https://github.com/daniel-hauser/moneyman"
                    >
                      <div className="text-xl">
                        <BsGithub />
                      </div>
                      <p>moneyman on Github</p>
                    </a>
                  </div>
                  <button className="flex flex-row bg-my_main hover:bg-my_hover_main text-my_main_contrast p-2 rounded-md justify-center items-center">
                    <a
                      className="flex flex-row gap-2"
                      href="https://github.com/hillelbu65/moneyman_client"
                    >
                      <div className="text-xl">
                        <BsGithub />
                      </div>
                      <p>This project on Github</p>
                    </a>
                  </button>
                </div>
              </div>
              {/* <div className="flex flex-row justify-end">
              <div
                className="flex w-14 h-14 justify-center items-center text-xl text-my_cream bg-my_main rounded-lg"
                onClick={() => setPopup(!popup)}
              >
                <MdClose />
              </div>
            </div> */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
