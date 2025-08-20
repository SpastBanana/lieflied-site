import { useState } from "react";
import { FaGear, FaRightFromBracket, FaUser } from "react-icons/fa6";
import { isAuth } from "../IsAuth";

export const Nav = ({ setMenuOpen }) => {
  const authenticated = isAuth();

  function renderAuthIcon() {
    if (authenticated) {
      return (
        <div className="flex items-center justify-center gap-5">
          <a href="/admin" className="cursor-pointer">
            <FaGear />
          </a>
          <a href="/logout" className="cursor-pointer">
            <FaRightFromBracket />
          </a>
        </div>
      );
    } else {
      return (
        <a onClick={() => setMenuOpen(true)} className="cursor-pointer">
          <FaUser />
        </a>
      );
    }
  }

  return (
    <div className="h-14 w-screen bg-[#00000066] flex items-center justify-between text-graytext z-50 fixed">
      <div className="ml-9 flex gap-5 t3 text-white">
        <a href="#info">Goede doel</a>
        <a href="#kaarten">Kaarten kopen</a>
      </div>
      <div className="mr-9 t-ico3 text-white">{renderAuthIcon()}</div>
    </div>
  );
};
