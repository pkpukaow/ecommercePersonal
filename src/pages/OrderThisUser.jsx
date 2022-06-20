import { useEffect, useState } from "react";
import SortByIcon from "../components/button/SortByIcon";
import axios from "../config/axios";
import OrderByUserId from "../components/order/OrderByUserId";

function OrderThisUser() {
  const [order, setOrder] = useState([]);
  const [status, setStatus] = useState("success");
  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    const res = await axios.get("/carts/me");
    setOrder(res.data.order);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

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
      <div className="flex flex-col items-center mt-8">
        {data.map((el) => (
          <OrderByUserId
            key={el.id}
            id={el.id}
            status={
              el.status === "pending"
                ? "Pending"
                : el.status === "success"
                ? "Success"
                : "Failed"
            }
            firstName={el.User.firstName}
            lastName={el.User.lastName}
            customerAddress={el.customerAddress}
            src={el.slipUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderThisUser;
