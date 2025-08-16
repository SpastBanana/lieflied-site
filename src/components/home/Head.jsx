import { BsEnvelope, BsInstagram } from "react-icons/bs";

export const Head = () => {
  return (
    <div className="h-screen w-screen relative">
      <img
        src="/img/site/bg.png"
        alt="Banner"
        className="w-full h-full absolute object-cover z-5 blur-xs saturate-150"
      />
      <div className="w-full h-full absolute z-10 bg-[#00000077] drop-shadow-none border-none"></div>
      <div className="w-full h-full absolute z-20 flex items-center justify-evenly flex-col">
        <img
          src="/img/site/Logo.jpeg"
          alt="Logo"
          className="w-80 rounded-lg shadow"
        />
      </div>
      <div className="absolute z-20 bottom-0 left-0 w-full h-40 flex items-center justify-center gap-30 text-4xl text-primary-foreground-inverted">
        <a
          href="https://www.instagram.com/stichtingliefenlied/?img_index=1"
          target="_blank"
        >
          <BsInstagram className="shadow" />
        </a>
        <a href="mailto:stichtingliefenlied@gmail.com">
          <BsEnvelope className="shadow" />
        </a>
      </div>
    </div>
  );
};
