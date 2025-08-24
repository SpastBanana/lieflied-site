import { NavList } from "./components/admin/NavList";
import { Tickets } from "./components/admin/Tickets";
import { Checkout } from "./components/admin/Checkout";
import { Email } from "./components/admin/Email";
import { Settings } from "./components/admin/Settings";
import { useState } from "react";

export const Admin = () => {
  const [tickets, setTickets] = useState(true);
  const [checkout, setCheckout] = useState(false);
  const [email, setEmail] = useState(false);
  const [settings, setSettings] = useState(false);

  return (
    <>
      <div className="flex">
        <NavList
          setTickets={setTickets}
          setCheckout={setCheckout}
          setEmail={setEmail}
          setSettings={setSettings}
        />
        <div className="relative w-full h-screen">
          <Tickets isOpen={tickets} />
          <Checkout isOpen={checkout} />
          <Email isOpen={email} />
          <Settings isOpen={settings} />
        </div>
      </div>
    </>
  );
};
