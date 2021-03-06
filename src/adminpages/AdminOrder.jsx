import OrderStatus from "../components/order/OrderStatus";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import SortByIcon from "../components/button/SortByIcon";
import axios from "../config/axios";

function AdminOrder() {
  const [order, setOrder] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [status, setStatus] = useState("success");
  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    const res = await axios.get("/carts");
    setOrder(res.data.order);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handleResetFilter = () => {
    setSearchInput("");
  };

  const handleClickPending = () => {
    fetchOrder();
    const newData = order.filter((el) => el.status === "pending");
    setData(newData);
    setStatus("pending");
  };

  const handleClickCompleted = async () => {
    fetchOrder();
    const newData = order.filter((el) => el.status === "success");
    setData(newData);
    setStatus("success");
  };

  const handleClickFailed = async () => {
    fetchOrder();
    const newData = order.filter((el) => el.status === "failed");
    setData(newData);
    setStatus("failed");
  };

  return (
    <div className="bg-pink-300 py-5 min-h-[40vh]">
      <h1 className="text-center mb-5 font-semibold text-3xl">
        Check Order Status
      </h1>
      {/* SortOrderBy */}
      <div className="pt-8 flex justify-center items-center gap-10 font-medium text-2xl text-white">
        <SortByIcon
          title="Pending"
          onClick={handleClickPending}
          isFocused={status === "pending"}
        />
        <SortByIcon
          title="Success"
          onClick={handleClickCompleted}
          isFocused={status === "success"}
        />
        <SortByIcon
          title="Failed"
          onClick={handleClickFailed}
          isFocused={status === "failed"}
        />
      </div>
      {/* Search */}
      <div className="flex items-center justify-center mt-10 mb-8">
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
      <div className="flex flex-col items-center">
        {data.map((el, idx) => {
          if (
            el.User.firstName
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            el.User.lastName.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return (
              <OrderStatus
                key={el.id}
                id={el.id}
                status={el.status}
                firstName={el.User.firstName}
                lastName={el.User.lastName}
                customerAddress={el.customerAddress}
                src={el.slipUrl}
                idx={idx}
                setOrder={setOrder}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default AdminOrder;
