import OrderStatus from "../components/order/OrderStatus";
import { useCart } from "../contexts/CartContext";

function AdminOrder() {
  const { order } = useCart();

  return (
    <div className="bg-pink-300 py-5 min-h-[40vh]">
      <h1 className="text-center mb-5 font-semibold text-3xl">
        Check Order Status
      </h1>
      <div className="flex flex-col items-center">
        {order.map((el) => (
          <OrderStatus
            key={el.id}
            orderId={el.id}
            status={el.status}
            userId={el.userId}
            customerAddress={el.customerAddress}
            src={el.slipUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminOrder;
