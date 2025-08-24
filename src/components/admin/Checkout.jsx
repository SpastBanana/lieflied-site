import { useEffect, useState } from "react";
import api from "../../api";
import { MapCheckout } from "./maps/MapCheckout";
import {
  FaCoins,
  FaEnvelope,
  FaLocationDot,
  FaReceipt,
  FaUser,
} from "react-icons/fa6";

export const Checkout = ({ isOpen }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets();

    const interval = setInterval(() => {
      getTickets();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getTickets = () => {
    api
      .get("/api/tickets/")
      .then((res) => res.data)
      .then((data) => setTickets(data))
      .catch((err) => alert(err));
  };

  return (
    <div
      className={`absolute top-0 left-0 flex w-full h-screen items-center justify-between flex-col gap-20 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <h1 className="h2 text-primary-dark mt-10">Kassa</h1>
      <div className="w-2/3 h-auto flex items center justify-center gap-16 t2">
        <a className="flex items-center justify-center gap-2 cursor-pointer bg-primary-dark text-gray-50 rounded-xl rounded-tr-none w-30 h-10 hover:bg-cyan-600 hover:rounded-none hover:shadow-sm transition-all">
          <FaReceipt /> Online
        </a>
        <a className="flex items-center justify-center gap-2 cursor-pointer bg-primary-dark text-gray-50 rounded-xl rounded-tr-none w-30 h-10 hover:bg-cyan-600 hover:rounded-none hover:shadow-sm transition-all">
          <FaCoins /> Contant
        </a>
      </div>
      <div className="relative flex flex-col w-2/3 h-full p-4 border-4 border-solid border-primary-dark border-b-0 rounded-t-md shadow-xs overflow-scroll">
        <div className="absolute w-[calc(100%-32px)] h-13 grid grid-cols-5 text-xl justify-items-center items-center z-10">
          <FaUser />
          <FaEnvelope />
          <FaCoins />
          <FaReceipt />
          <FaLocationDot />
        </div>
        <div className="h-18 w-full"></div>
        {tickets.map((ticket, key) =>
          ticket.has_payed === "1" ? (
            <MapCheckout key={key} ticket={ticket} />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};
