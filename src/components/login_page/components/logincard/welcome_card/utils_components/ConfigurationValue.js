import React from "react";

export default function ConfigurationValue({
  keyName = "",
  value = "",
  note = "",
}) {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col text-my_cream p-3 bg-my_main_contrast rounded-md text-xs w-full h-fit">
        <div className=" text-my_main font-bold">{keyName}:</div>
        <div>{value}</div>
        <div>
          {note ? (
            <div className="text-my_main font-bold bg-my_cream bg-opacity-20 mt-2 p-2 rounded-md">
              Note : <span className=" text-my_cream font-normal">{note}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
