import CardImg from "../card/CardImg";

function CartList({
  handleDeleteArray,
  id,
  charactorName,
  amount,
  price,
  src,
  status,
}) {
  return (
    <>
      <div className="grid grid-cols-2 mx-auto max-w-5xl">
        <div className="">
          <CardImg src={src} />
        </div>
        <div className="flex flex-col justify-between ml-24">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{charactorName}</h1>
            <h3 className="text-lg font-medium">
              Status :{" "}
              {status === "preorder"
                ? "Pre-Order"
                : status === "instock"
                ? "In-Stock"
                : "Sold Out"}
            </h3>
          </div>
          <div className="flex gap-3">
            <h3 className="text-lg font-semibold">Amount : {amount}</h3>
            <h3 className="text-lg font-semibold">Price : ฿{price}</h3>
          </div>
        </div>
        <div className="col-start-4 justify-self-end self-end  text-xl">
          <button
            onClick={() => {
              handleDeleteArray(id);
            }}
            className="font-semibold text-white bg-sky-300 hover:bg-blue-800 rounded py-2 px-3"
          >
            Delete
          </button>
        </div>
      </div>
      <hr className="border border-black max-w-5xl mx-auto my-8" />
    </>
  );
}

export default CartList;
