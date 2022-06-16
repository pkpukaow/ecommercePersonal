import CardImg from "../card/CardImg";
import { useAuth } from "../../contexts/AuthContext";
import axios from "../../config/axios";
import { useParams, useNavigate } from "react-router-dom";
import ModalForDeleteItem from "../modal/ModalForDeleteItem";
import { useCart } from "../../contexts/CartContext";
import { useState } from "react";

function TopDetail({ data }) {
  const { cart, setCart } = useCart();

  const [count, setCount] = useState(1);
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClickDelete = async () => {
    await axios.delete("/items/" + id);
    navigate("/shop");
  };

  const handleClickIncreaseItem = () => {
    if (count <= 2) {
      setCount(count + 1);
    }
  };
  const handleClickDecreaseItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // const handleDeleteArray = (id) => {
  //   const idx = cart.findIndex((el) => el.id === id);
  //   if (idx !== -1) {
  //     let cloneCart = [...cart];
  //     cloneCart.splice(idx, 1);
  //     setCart(cloneCart);
  //   }
  // };

  const handleAddToCart = () => {
    const cartItem = [...cart];
    const idx = cartItem.findIndex((el) => el.id === id);
    if (idx === -1) {
      cartItem.push({
        id: data?.id,
        name: data?.charactorName,
        price: data?.price,
        amount: count,
        image: data?.Images.find((el) => el.picType === "main")?.imageUrl,
        status: data?.status,
      });
    } else {
      cartItem[idx].amount += count;
    }
    setCart(cartItem);
    console.log("hahahaha");
    navigate("/cart");
  };

  return (
    <div className="bg-pink-300">
      <div className="py-8 px-7 flex justify-around mx-[80px]">
        <div>
          <CardImg
            src={data?.Images.find((el) => el.picType === "main")?.imageUrl}
          />
        </div>
        <div className="flex flex-col p-3">
          <div className="flex justify-end">
            {user === "admin" && (
              <ModalForDeleteItem deleteItem={handleClickDelete} />
            )}
          </div>
          <h1 className="text-2xl font-bold">{data?.charactorName}</h1>
          <div className="mt-3 flex flex-col gap-1 text-lg font-medium">
            <h3>{data?.animeName}</h3>
            <h3>{data?.copyRight}</h3>
            <h3>
              Status :{" "}
              {data?.status === "preorder"
                ? "Pre-Order"
                : data?.status === "instock"
                ? "In-Stock"
                : "Sold Out"}
            </h3>
          </div>
          <h1 className="text-2xl font-semibold text-orange-600 flex gap-1 mt-5">
            ฿ {data?.price}
          </h1>
          <div className="flex justify-between mt-5 gap-1">
            <div className="flex text-2xl font-bold gap-2">
              <button onClick={handleClickDecreaseItem}>-</button>
              <h1>{count}</h1>
              <button onClick={handleClickIncreaseItem}>+</button>
            </div>
            <button
              onClick={handleAddToCart}
              className="rounded ml-12 px-2 text-white font-semibold hover:bg-orange-600 bg-orange-500"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="py-2">
        <hr className="border border-black mx-[180px]" />
      </div>
    </div>
  );
}

export default TopDetail;
