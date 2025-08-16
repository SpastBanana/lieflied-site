import { BiUser } from "react-icons/bi";

export const Nav = () => {
  return (
    <div className="h-16 w-screen bg-[#00000066] flex items-center justify-between text-graytext z-50 fixed">
      <div className="ml-9 flex gap-5 t3 text-primary-foreground-inverted">
        <a href="#info">Info</a>
        <a href="#kaarten">Kaarten kopen</a>
      </div>
      <div className="mr-9 t-ico3 text-primary-foreground-inverted">
        <a href="/login">
          <BiUser />
        </a>
      </div>
    </div>
  );
};
