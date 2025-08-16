import { BsEnvelope } from "react-icons/bs";

export const Info = () => {
  return (
    <div
      id="info"
      className="min-h-screen w-screen flex items-center justify-center flex-col gap-18 bg-white"
    >
      <img src="/img/site/Ticket.png" alt="Ticket icon" className="w-40" />
      <img src="/img/site/Logo.jpeg" alt="Logo Lief & Lied" className="w-60" />
      <p className="t2 text-primary-foreground w-1/3 text-center">
        Bestel jouw kaarten via het formulier hieronder. Voor vragen over jouw
        kaarten mag je ons altijd mailen
      </p>
      <a
        href="mailto:stichtingliefenlied@gmail.com"
        className="t-ico1 text-primary-dark"
      >
        <BsEnvelope />
      </a>
    </div>
  );
};
