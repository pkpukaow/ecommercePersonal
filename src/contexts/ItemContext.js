import { createContext, useContext } from "react";
import axios from "../config/axios";

const ItemContext = createContext();

function ItemContextProvider({ children }) {
  const createItem = async (input) => {
    const res = await axios.post("/items", input);
  };

  return (
    <ItemContext.Provider value={{ createItem }}>
      {children}
    </ItemContext.Provider>
  );
}

const useItem = () => {
  const ctx = useContext(ItemContext);
  return ctx;
};

export default ItemContextProvider;

export { useItem };
