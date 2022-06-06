import CardImg from "../card/CardImg";
// import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

function TopDetail() {
  return (
    <div className="bg-pink-300">
      <div className="py-5 flex justify-around mx-[80px]">
        <div>
          <CardImg />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Charactor Name</h1>
          <div className="mt-3 flex flex-col gap-1 text-lg font-medium">
            <h3>Anime Name</h3>
            <h3>Copy Right</h3>
            <h3>Status</h3>
          </div>
          <h1 className="text-2xl font-semibold text-orange-600 flex gap-1 mt-5">
            ฿ 5000
          </h1>
          <div className="flex justify-between mt-5 gap-1">
            <div className="flex text-2xl font-bold gap-2">
              <button>-</button>
              <h1>0</h1>
              <button>+</button>
            </div>
            <button className="rounded ml-12 px-2 text-white font-semibold hover:bg-orange-600 bg-orange-500">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="py-5">
        <hr className="border border-black mx-[180px]" />
      </div>
    </div>
  );
}

export default TopDetail;
