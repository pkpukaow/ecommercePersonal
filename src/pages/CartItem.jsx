import CartList from "../components/cart/CartList";

function CartItem() {
  const handleProceedToCheckout = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-pink-300 p-5">
      <h1 className="flex justify-center font-bold text-3xl">Cart Item</h1>
      <button
        onClick={handleProceedToCheckout}
        className="font-semibold text-white bg-sky-300 hover:bg-blue-800 rounded py-2 px-3"
      >
        Proceed to Checkout
      </button>
      <div className="my-10">
        <CartList />
        <CartList />
        <CartList />
      </div>
    </div>
  );
}

export default CartItem;
