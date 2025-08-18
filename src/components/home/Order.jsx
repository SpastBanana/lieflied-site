import { useState } from "react";

export const Order = () => {
  const [tickets, setTickets] = useState("1");
  console.log(tickets);

  return (
    <div
      id="kaarten"
      className="min-h-[calc(100vh-132px)] w-screen bg-primary-light flex items-center justify-around"
    >
      <div className="bg-white shadow-sm w-2/7 h-[65vh] rounded-3xl rounded-tr-none flex items-center justify-evenly flex-col">
        <div className="w-52 h-30 relative">
          <img
            src="/img/site/Ticket.png"
            alt="Ticket Icon"
            className="w-full absolute z-10"
          />
          <p className="absolute w-full h-30 flex items-center justify-center z-20 t2 font-semibold italic">
            {`€${(parseInt(tickets) * 12.5).toFixed(2).replace(".", ",")}`}
          </p>
        </div>
        <h2 className="t2">Bestel hier uw kaarten!</h2>
        <form className="flex items-center justify-center flex-col gap-7 w-full">
          <div
            before="Voornaam"
            className="input-wrapper before:content-[attr(before)]"
          >
            <input type="text" className="input-field" />
          </div>
          <div
            before="Achternaam"
            className="input-wrapper before:content-[attr(before)]"
          >
            <input type="text" className="input-field" />
          </div>
          <div
            before="Aantal kaarten"
            className="input-wrapper before:content-[attr(before)]"
          >
            <input
              value={tickets}
              onChange={(e) => setTickets(e.target.value)}
              type="number"
              className="input-field"
              id="counter"
              min={1}
              max={30}
            />
          </div>
          <div
            before="Email"
            className="input-wrapper before:content-[attr(before)]"
          >
            <input type="text" className="input-field" />
          </div>
          <button className="w-30 h-10 border-3 border-solid border-primary-dark rounded-lg rounded-tr-none">
            Bestel
          </button>
        </form>
      </div>
    </div>
  );
};
