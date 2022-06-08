import { Outlet } from "react-router-dom";
import HeaderMain from "./HeaderMain";
import UserFooter from "./UserFooter";

function AdminLayout() {
  return (
    <>
      <HeaderMain />
      <Outlet />
      <UserFooter />
    </>
  );
}

export default AdminLayout;
