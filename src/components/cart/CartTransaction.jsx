import { useNavigate } from "react-router-dom";
import CardTransaction from "../card/CardTransaction";

function CartTransaction({ charactorName, amount, price, src, status }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-3 mx-auto max-w-5xl">
        <div className="">
          <CardTransaction src={src} />
        </div>
        <div className="flex flex-col justify-between ml-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{charactorName}</h1>
            <h3 className="text-lg font-medium">
              {status === "preorder"
                ? "Pre-Order"
                : status === "instock"
                ? "In-Stock"
                : "Sold Out"}
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Amount : {amount}</h3>
            <h3 className="text-lg font-semibold">Price : ฿{price}</h3>
          </div>
        </div>
        <div className="col-start-3 justify-self-end self-end pr-4 text-xl">
          <button
            onClick={() => navigate("/cart")}
            className="font-semibold text-white bg-sky-300 hover:bg-blue-800 rounded py-2 px-3"
          >
            Edit Item
          </button>
        </div>
      </div>
      <hr className="border border-black max-w-5xl mx-auto my-8" />
    </>
  );
}

export default CartTransaction;
