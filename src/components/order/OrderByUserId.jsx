import ModalForShowPic from "../modal/ModalForShowPic";

function OrderByUserId({
  src,
  id,
  status,
  firstName,
  lastName,
  customerAddress,
}) {
  return (
    <div className="flex w-[85vw] justify-evenly relative text-lg font-medium my-2">
      <h3>Order_id : {id}</h3>
      <h3>status : {status}</h3>
      <h3>
        customer : {firstName} {lastName}
      </h3>
      <h3>Address : {customerAddress}</h3>
      <ModalForShowPic src={src} />
    </div>
  );
}

export default OrderByUserId;
