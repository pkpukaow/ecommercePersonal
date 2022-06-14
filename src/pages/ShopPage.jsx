import SortByIcon from "../components/button/SortByIcon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import CardShop from "../components/card/CardShop";
import { AiOutlineClose } from "react-icons/ai";

function ShopPage() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("allitem");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get("/auth");
      setData(res.data.item);
      console.log(data);
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

  const handleClickToItemDetail = async (id) => {
    navigate(`/item/${id}`);
  };

  const handleResetFilter = (e) => {
    e.preventDefault();
    setSearchInput("");
  };

  return (
    <div className="bg-gray-200">
      <div>
        {/* SortBy */}
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
        {/* SearchBar */}
        <div className="flex items-center justify-center mt-10 mb-4">
          <input
            className="flex w-96 rounded p-2"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => {
              const sortItem = e.target.value;
              setSearchInput(sortItem);
            }}
          />
          <AiOutlineClose
            role="button"
            onClick={handleResetFilter}
            className="font-bold text-3xl text-white bg-black rounded"
          />
        </div>
      </div>
      {/* MapItem */}
      <div className="p-5 gap-3 grid grid-cols-4">
        {data.map((el) => {
          if (
            el.charactorName.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return (
              <CardShop
                key={el.id}
                src={el.Images.find((el) => el.picType === "main")?.imageUrl}
                title={el.charactorName}
                detail={
                  el.status === "preorder"
                    ? "Pre-Order"
                    : el.status === "instock"
                    ? "In-Stock"
                    : "Sold Out"
                }
                price={el.price}
                onClick={() => handleClickToItemDetail(el.id)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ShopPage;
