import SortByIcon from "../components/button/SortByIcon";
import { useEffect, useState } from "react";
import axios from "../config/axios";
import CardShop from "../components/card/CardShop";

function ShopPage() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("allitem");

  const fetchData = async () => {
    try {
      const res = await axios.get("/auth");
      setData(res.data.item);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickAllItem = (e) => {
    e.preventDefault();
    fetchData();
    setStatus("allitem");
  };

  const handleClickPreOrder = async (e) => {
    e.preventDefault();
    const res = await axios.get("/auth");
    const newData = res.data.item.filter((el) => el.status === "preorder");
    setData(newData);
    setStatus("preorder");
  };

  const handleClickInStock = async (e) => {
    e.preventDefault();
    const res = await axios.get("/auth");
    const newData = res.data.item.filter((el) => el.status === "instock");
    setData(newData);
    setStatus("instock");
  };

  return (
    <div className="bg-gray-200">
      <div className="pt-8 flex justify-center items-center gap-10 font-medium text-2xl text-white">
        <SortByIcon
          title="Pre-order"
          onClick={handleClickPreOrder}
          isFocused={status === "preorder"}
        />
        <SortByIcon
          title="All-item"
          onClick={handleClickAllItem}
          isFocused={status === "allitem"}
        />
        <SortByIcon
          title="In-stock"
          onClick={handleClickInStock}
          isFocused={status === "instock"}
        />
      </div>
      <div className="p-5 gap-3 grid grid-cols-4">
        {data.map((el) => (
          <CardShop
            key={el.id}
            title={el.charactorName}
            detail={el.animeName}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
