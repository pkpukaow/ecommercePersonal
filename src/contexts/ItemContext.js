import { createContext, useContext, useState } from "react";
import axios from "../config/axios";

const ItemContext = createContext();

function ItemContextProvider({ children }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("/auth");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createItem = async (input) => {
    const res = await axios.post("/items", input);
  };

  return (
    <ItemContext.Provider value={{ createItem, fetchData, data, setData }}>
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
