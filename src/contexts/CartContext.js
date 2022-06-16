import { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await axios.get("/carts");
      setOrder(res.data.order);
    };
    fetchOrder();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, order, setOrder }}>
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
