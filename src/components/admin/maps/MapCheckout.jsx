import { useState } from "react";
import { FaCheck, FaTrashCan, FaXmark } from "react-icons/fa6";

export const MapCheckout = ({ ticket }) => {
  const [deleteView, setDeleteView] = useState(false);

  function checkedIn() {
    if (ticket.checked_in === "1") {
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
      <div className="w-full h-auto grid grid-cols-5 t3 justify-items-center items-center z-10 text-center pb-4">
        <p>
          {ticket.first_name} {ticket.last_name}
        </p>
        <p className="t4">{ticket.email}</p>
        <p>€ {ticket.total_amount}</p>
        <p>{ticket.invoice_nr}</p>
        {checkedIn()}
      </div>
    </>
  );
};
