import React, { useContext } from "react";
import { PersonalSpaceContext } from "../../../context/PersonalSpace";
import { MdPerson } from "react-icons/md";
import Dropdown from "./Dropdown";

export default function NavBarAndTools(props) {
  const [personalSpaceContext, setPersonalSpaceContext] =
    useContext(PersonalSpaceContext);
  return (
    <div className="flex flex-row fixed left-3 top-3 sm:left-16 sm:top-16  w-fit h-fit">
      <Dropdown data={props.data} />
      <div
        onClick={() => setPersonalSpaceContext(!personalSpaceContext)}
        className="flex items-center bg-my_main w-16 h-16 rounded-lg hover:bg-my_hover_main font-medium hover:font-bold ml-2 justify-center
                transition ease-out  
                hover:-translate-y-1
                hover:scale-10
                shadow-2xl"
      >
        {<MdPerson size={"25px"} color={"#fffaff"} />}
      </div>
    </div>
  );
}
