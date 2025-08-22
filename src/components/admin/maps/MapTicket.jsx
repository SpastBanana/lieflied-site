import { useState } from "react";
import { FaCheck, FaTrashCan, FaXmark } from "react-icons/fa6";

export const MapTicket = ({ ticket, onDelete }) => {
  const [deleteView, setDeleteView] = useState(false);

  function hasPayed() {
    if (ticket.has_payed === "1") {
      return (
        <button className="flex w-12 items-center justify-around h-5">
          <div className="flex items-center justify-center bg-green-600 h-full w-1/2 rounded-tl-full rounded-bl-full">
            <FaCheck className="text-sm text-gray-50" />
          </div>
          <div className="flex items-center justify-center bg-gray-300 h-full w-1/2 rounded-tr-full rounded-br-full">
            <FaXmark className="text-sm text-gray-600" />
          </div>
        </button>
      );
    } else {
      return (
        <button className="flex w-12 items-center justify-around h-5">
          <div className="flex items-center justify-center bg-gray-300 h-full w-1/2 rounded-tl-full rounded-bl-full">
            <FaCheck className="text-sm text-gray-600" />
          </div>
          <div className="flex items-center justify-center bg-red-600 h-full w-1/2 rounded-tr-full rounded-br-full">
            <FaXmark className="text-sm text-gray-50" />
          </div>
        </button>
      );
    }
  }

  return (
    <>
      <div className="w-full h-auto grid grid-cols-6 t3 justify-items-center items-center z-10 text-center pb-4">
        <p>
          {ticket.first_name} {ticket.last_name}
        </p>
        <p>{ticket.ticket_count}</p>
        <p>€ {ticket.total_amount}</p>
        <p>{ticket.invoice_nr}</p>
        {hasPayed()}
        <a
          className="text-red-600 cursor-pointer text-lg"
          onClick={() => setDeleteView(true)}
        >
          <FaTrashCan />
        </a>
      </div>
      <div
        className={`fixed z-50 top-0 left-0 h-screen w-screen ${
          deleteView
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-[#00000077] flex items-center justify-center`}
      >
        <div className="w-1/5 h-2/5 bg-gray-50 p-6 flex items-center justify-between flex-col rounded-xl">
          <p className="t2 text-center font-bold">
            Weet je zeker dat je dit ticket wil verwijderen?
          </p>
          <div>
            <p>
              Naam: {ticket.first_name} {ticket.last_name}
            </p>
            <p>Aantal kaarten: {ticket.ticket_count}</p>
            <p>Email: {ticket.email}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              onClick={() => setDeleteView(false)}
              className="cursor-pointer w-16 h-7 bg-red-500 text-gray-50 rounded-sm flex items-center justify-center"
            >
              Ja
            </a>
            <a
              onClick={() => setDeleteView(false)}
              className="cursor-pointer w-16 h-7 bg-blue-500 text-gray-50 rounded-sm flex items-center justify-center"
            >
              Nee
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
