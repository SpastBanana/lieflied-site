import { BiUser } from "react-icons/bi";

export const HomeNav = () => {
  <div className="h-[5vh] w-1 bg-amber-300 flex items-center justify-between t1">
    <div className="ml-2 flex gap-1">
      <a href="#info">Info</a>
      <a href="#kaarten">Kaarten kopen</a>
    </div>
    <div className="mr-2">
      <a href="/login">
        <BiUser />
      </a>
    </div>
  </div>;
};
