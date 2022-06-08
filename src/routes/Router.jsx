import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import UserLayout from "../components/userLayout/UserLayout";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import SignupPage from "../pages/SignupPage";
import ItemDetailPage from "../pages/ItemDetailPage";
import AdminCreate from "../adminpages/AdminCreate";
import AdminLayout from "../components/userLayout/AdminLayout";

function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/" element={<UserLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/item/:id" element={<ItemDetailPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<AdminCreate />} />
        <Route path="addphoto" element={<div>Photo</div>} />
      </Route>

      <Route path="/profile" element={<div>Hello</div>}>
        <Route path=":id" element={<div>Hello</div>} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default Router;
