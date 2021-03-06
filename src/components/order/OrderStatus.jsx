import ModalForEditOrderStatus from "../modal/ModalForEditOrderStatus";
import ModalForShowPic from "../modal/ModalForShowPic";

function OrderStatus({
  src,
  id,
  status,
  firstName,
  lastName,
  customerAddress,
  setOrder,
  idx,
}) {
  return (
    <div className="flex w-[85vw] justify-evenly relative text-lg font-medium my-2">
      <h3>Order_id : {id}</h3>
      <div>
        <ModalForEditOrderStatus
          idx={idx}
          status={status}
          setOrder={setOrder}
          id={id}
        />
      </div>
      <h3>
        customer : {firstName} {lastName}
      </h3>
      <h3>Address : {customerAddress}</h3>
      <ModalForShowPic src={src} />
    </div>
  );
}

export default OrderStatus;
