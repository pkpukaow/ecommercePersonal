import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import UserLayout from "../components/userLayout/UserLayout";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import SignupPage from "../pages/SignupPage";
import ItemDetailPage from "../pages/ItemDetailPage";
import AdminCreate from "../adminpages/AdminCreate";
import AdminLayout from "../components/userLayout/AdminLayout";
import EditProfilePage from "../components/profilepage/EditProfilePage";
import CartItem from "../pages/CartItem";
import TransactionPage from "../pages/TransactionPage";
import PurchasePage from "../pages/PurchasePage";
import AdminOrder from "../adminpages/AdminOrder";
import SuccessPurchase from "../pages/SuccessPurchase";
import OrderThisUser from "../pages/OrderThisUser";
import { useAuth } from "../contexts/AuthContext";

function Router() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/item/:id" element={<ItemDetailPage />} />
        <Route path="/profile" element={<EditProfilePage />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/success" element={<SuccessPurchase />} />
        <Route path="/order" element={<OrderThisUser />} />
      </Route>

      {user === "admin" && (
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<AdminCreate />} />
          <Route path="ordercheck" element={<AdminOrder />} />
        </Route>
      )}

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="*" element={<Navigate to="/shop" />} />
    </Routes>
  );
}

export default Router;
