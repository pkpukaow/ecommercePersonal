import { createContext, useContext, useEffect, useState } from "react";
// import axios from "../config/axios";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const ctx = useContext(CartContext);
  return ctx;
};

export default CartContextProvider;

export { useCart };
