export const MapTicket = ({ ticket }) => {
  function MapEmailBit() {
    console.log(ticket.email_subscription);
    if (ticket.email_subscription === "1") {
      return <i>Ontvangt graag emails</i>;
    } else {
      return <i>Wil geen email ontvangen</i>;
    }
  }

  return (
    <div className="flex gap-10">
      <div>
        <p>{ticket.first_name}</p>
        <p>{ticket.last_name}</p>
      </div>
      {MapEmailBit()}
    </div>
  );
};
