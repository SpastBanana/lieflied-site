import { BiSolidDashboard, BiSolidLogOut } from "react-icons/bi";
import { BsBack, BsCash, BsGear, BsTicket } from "react-icons/bs";
import {
  FaCashRegister,
  FaComputer,
  FaGear,
  FaLaptop,
  FaRightFromBracket,
  FaTicket,
} from "react-icons/fa6";

export const NavList = () => {
  return (
    <div className="w-60 h-screen flex items-center justify-between flex-col bg-primary-light pt-10 pb-10">
      <img
        src="/img/site/Logo.jpeg"
        alt="Logo Lief & Lied"
        className="w-3/4 rounded-lg"
      />
      <div className="w-full flex items-end justify-center flex-col">
        <a className="nav-item">
          <p className="nav-item-t">Dashboard</p>
          <BiSolidDashboard className="nav-item-i" />
        </a>
        <a className="nav-item">
          <p className="nav-item-t">Kaarten</p>
          <FaTicket className="nav-item-i" />
        </a>
        <a className="nav-item">
          <p className="nav-item-t">Kassa</p>
          <FaCashRegister className="nav-item-i" />
        </a>
        <a className="nav-item">
          <p className="nav-item-t">Instellingen</p>
          <FaGear className="nav-item-i" />
        </a>
        <a className="nav-item" href="/">
          <p className="nav-item-t">Back to site</p>
          <FaLaptop className="nav-item-i" />
        </a>
        <a className="nav-item" href="/logout">
          <p className="nav-item-t">Logout</p>
          <FaRightFromBracket className="nav-item-i" />
        </a>
      </div>
      <div className="flex items-center justify-center flex-col gap-4">
        <p className="text-center t4 w-2/3">
          Deze site wordt mogelijk gemaakt door
        </p>
        <a href="https://rhythmstudios.nl" target="_blank" className="w-9/10">
          <img src="/img/site/srs.png" alt="Logo Sebastiaans Rhythm Studios" />
        </a>
      </div>
    </div>
  );
};
