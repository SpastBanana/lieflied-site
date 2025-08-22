import { useEffect, useState } from "react";
import api from "../../api";
import { MapTicket } from "./maps/MapTicket";
import {
  FaCashRegister,
  FaCoins,
  FaPerson,
  FaReceipt,
  FaTicket,
  FaTrashCan,
  FaUser,
} from "react-icons/fa6";

export const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [ticketStats, setTicketStats] = useState([]);

  useEffect(() => {
    getTickets();
    getTicketStats();
  }, []);

  const getTickets = () => {
    api
      .get("/api/tickets/")
      .then((res) => res.data)
      .then((data) => setTickets(data))
      .catch((err) => alert(err));
  };

  const getTicketStats = () => {
    api
      .get("/api/tickets/stats/")
      .then((res) => res.data)
      .then((data) => setTicketStats(data))
      .catch((err) => alert(err));
  };

  const deleteTicket = (id) => {
    api
      .delete(`/api/tickets/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getTickets();
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="w-full h-screen flex items-center justify-between flex-col gap-20">
      <div className="w-2/3 h-auto t3 border-solid border-4 border-primary-dark rounded-md mt-10 pt-3 pb-3 shadow-xs bg-background grid grid-rows-3">
        <div className="grid grid-cols-3 justify-items-center items-center h-12">
          <p>Ordered</p>
          <p className="flex items-center justify-center gap-1">
            <FaTicket /> {ticketStats.tickets_ordered}
          </p>
          <p>€ {ticketStats.amount_ordered}</p>
        </div>
        <div className="grid grid-cols-3 justify-items-center items-center h-12">
          <p>Payed</p>
          <p className="flex items-center justify-center gap-1">
            <FaTicket /> {ticketStats.tickets_payed}
          </p>
          <p>€ {ticketStats.amount_payed}</p>
        </div>
        <div className="grid grid-cols-3 justify-items-center items-center h-12">
          <p>Totals</p>
          <p className="flex items-center justify-center gap-1">
            <FaTicket /> {ticketStats.tickets_sum}
          </p>
          <p>€ {ticketStats.amount_sum}</p>
        </div>
      </div>
      <div className="relative flex flex-col w-2/3 h-full p-4 border-4 border-solid border-primary-dark border-b-0 rounded-t-md shadow-xs overflow-scroll">
        <div className="absolute w-[calc(100%-32px)] h-13 grid grid-cols-6 text-xl justify-items-center items-center z-10">
          <FaUser />
          <FaTicket />
          <FaCoins />
          <FaReceipt />
          <FaCashRegister />
          <FaTrashCan />
        </div>
        <div className="h-18 w-full"></div>
        {tickets.map((ticket, key) => (
          <MapTicket key={key} onDelete={deleteTicket} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};
