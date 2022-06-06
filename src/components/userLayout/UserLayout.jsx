import { Outlet } from "react-router-dom";
import DropdownHeader from "./DropdownHeader";
import HeaderMain from "./HeaderMain";
import UserFooter from "./UserFooter";

function UserLayout() {
  return (
    <>
      <HeaderMain />
      <Outlet />
      <UserFooter />
      {/* <DropdownHeader /> */}
    </>
  );
}

export default UserLayout;
