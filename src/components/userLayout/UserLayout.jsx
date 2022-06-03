import { Outlet } from "react-router-dom";
import HeaderMain from "./HeaderMain";

function UserLayout() {
  return (
    <>
      <HeaderMain />
      <Outlet />
    </>
  );
}

export default UserLayout;
