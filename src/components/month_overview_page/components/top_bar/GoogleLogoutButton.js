import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

export default function GoogleLogoutButton() {
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={onSuccess}
        className="flex items-center bg-my_main w-16 h-16 rounded-lg hover:bg-my_hover_main font-medium hover:font-bold ml-2 justify-center
          transition ease-out
          hover:-translate-y-1
          hover:scale-10
          shadow-2xl
        text-white
          text-2xl"
      >
        <div className="rotate-180">
          <MdOutlineLogout />
        </div>
      </button>
    </div>
  );
}
