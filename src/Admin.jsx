import { NavList } from "./components/admin/NavList";
import { Tickets } from "./components/admin/Tickets";

export const Admin = () => {
  return (
    <>
      <div className="flex">
        <NavList />
        <Tickets />
      </div>
    </>
  );
};
