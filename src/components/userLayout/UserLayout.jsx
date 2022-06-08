import { Outlet } from "react-router-dom";
import HeaderMain from "./HeaderMain";
import UserFooter from "./UserFooter";

function UserLayout() {
  return (
    <>
      <HeaderMain />
      <Outlet />
      <UserFooter />
    </>
  );
}

export default UserLayout;
