import CartTransaction from "../components/cart/CartTransaction";
import { useCart } from "../contexts/CartContext";
// import axios from "../config/axios";

function TransactionPage() {
  const { cart } = useCart();

  let numberOfItem = 0;
  let totalPrice = 0;

  cart.map((el) => {
    return (totalPrice += el.amount * el.price);
  });

  cart.map((el) => {
    return (numberOfItem += el.amount);
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post("/transaction")
  // }

  return (
    <div className="bg-pink-300 flex flex-col items-center py-5">
      <div>
        <h1 className="font-semibold text-2xl m-5">Order Summary</h1>
      </div>
      <div className="flex justify-around w-[60vw]">
        {/* Item Detail DIV */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-2xl m-5">Item Detail</h2>
          {cart.map((el) => (
            <CartTransaction
              key={el?.id}
              charactorName={el?.name}
              amount={el?.amount}
              price={el?.price}
              src={el?.image}
              status={el?.status}
            />
          ))}
        </div>
        {/* Summary DIV */}
        <div>
          <div>
            <h1 className="font-semibold text-2xl m-5">Summary</h1>
          </div>
          <div className="flex justify-between font-medium">
            <h1>Amount</h1>
            <div>{numberOfItem}</div>
          </div>
          <div className="flex justify-between font-medium">
            <h1>Total_Price</h1>
            <h1>฿{totalPrice}</h1>
          </div>
          <button className="mt-6 ml-10 font-semibold text-white bg-sky-300 hover:bg-blue-800 rounded px-2 py-1">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionPage;
