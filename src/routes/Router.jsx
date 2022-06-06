import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import UserLayout from "../components/userLayout/UserLayout";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import SignupPage from "../pages/SignupPage";
import ItemDetailPage from "../pages/ItemDetailPage";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/" element={<UserLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ItemDetailPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
