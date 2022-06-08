import { Outlet } from "react-router-dom";
import ItemContextProvider from "../../contexts/ItemContext";
import HeaderMain from "./HeaderMain";
import UserFooter from "./UserFooter";

function AdminLayout() {
  return (
    <>
      <ItemContextProvider>
        <HeaderMain />
        <Outlet />
        <UserFooter />
      </ItemContextProvider>
    </>
  );
}

export default AdminLayout;
