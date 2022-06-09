import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import UserLayout from "../components/userLayout/UserLayout";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import SignupPage from "../pages/SignupPage";
import ItemDetailPage from "../pages/ItemDetailPage";
import AdminCreate from "../adminpages/AdminCreate";
import AdminLayout from "../components/userLayout/AdminLayout";
import ProfilePage from "../pages/ProfilePage";

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

      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default Router;
