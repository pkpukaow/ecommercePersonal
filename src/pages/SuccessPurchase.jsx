import { Link } from "react-router-dom";

function SuccessPurchase() {
  return (
    <div className="bg-pink-300 py-5 pt-12 h-[59vh]">
      <div className="flex flex-col gap-20 justify-center items-center text-3xl font-bold">
        <h1
          className="text-8xl text-white"
          style={{ textShadow: "2px 2px black" }}
        >
          SUCCESS
        </h1>
        <h1 className="text-5xl text-white">Your Order has been place</h1>
        <Link to="/order">
          <button className="bg-blue-300 hover:bg-blue-800 rounded px-2 py-1 text-white">
            Check your Order
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SuccessPurchase;
