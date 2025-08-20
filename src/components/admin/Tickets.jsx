import { useEffect, useState } from "react";
import api from "../../api";
import { MapTicket } from "./maps/MapTicket";

export const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = () => {
    api
      .get("/api/tickets/")
      .then((res) => res.data)
      .then((data) => setTickets(data))
      .catch((err) => alert(err));
  };

  return (
    <div>
      <h2 className="text-2xl mb-6">Tickets</h2>
      {tickets.map((ticket, key) => (
        <MapTicket key={key} ticket={ticket} />
      ))}
    </div>
  );
};
