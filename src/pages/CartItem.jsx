import { useNavigate } from "react-router-dom";
import CartList from "../components/cart/CartList";
import { useCart } from "../contexts/CartContext";

function CartItem() {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();

  console.log(cart);

  const handleClickCheckout = () => {
    navigate("/transaction");
  };

  const handleDeleteArray = (id) => {
    const idx = cart.findIndex((el) => el.id === id);
    if (idx !== -1) {
      let cloneCart = [...cart];
      cloneCart.splice(idx, 1);
      setCart(cloneCart);
    }
  };

  return (
    <>
      <div className="bg-pink-300 p-5">
        {cart.length < 1 ? (
          <div className="flex flex-col items-center m-5">
            <div className="font-bold text-3xl">Your Cart is EMPTY</div>

            <button
              onClick={() => navigate("/shop")}
              className="m-32 font-semibold text-white bg-sky-300 hover:bg-blue-800 rounded py-2 px-3"
            >
              Click Here to Shop
            </button>
          </div>
        ) : (
          <>
            <h1 className="flex justify-center font-bold text-3xl">
              Cart Item
            </h1>
            <div className="flex justify-end mr-36 my-5">
              <button
                onClick={handleClickCheckout}
                className="font-semibold text-white bg-sky-300 hover:bg-blue-800 rounded py-2 px-3"
              >
                Proceed to Checkout
              </button>
            </div>
            <div className="my-10">
              {cart.map((el, idx) => (
                <CartList
                  handleDeleteArray={handleDeleteArray}
                  key={idx}
                  id={el?.id}
                  charactorName={el?.name}
                  amount={el?.amount}
                  price={el?.price}
                  src={el?.image}
                  status={el?.status}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartItem;
