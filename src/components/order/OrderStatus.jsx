import ModalForShowPic from "../modal/ModalForShowPic";

function OrderStatus({ src, orderId, status, userId, customerAddress }) {
  return (
    <div className="flex w-[85vw] justify-evenly relative text-lg font-medium my-2">
      <h3>Order_id : {orderId}</h3>
      <h3>Status : {status}</h3>
      <h3>User_id : {userId}</h3>
      <h3>Address : {customerAddress}</h3>
      <ModalForShowPic src={src} />
    </div>
  );
}

export default OrderStatus;
