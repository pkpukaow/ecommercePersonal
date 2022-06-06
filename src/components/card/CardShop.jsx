import ShopIcon from "../button/ShopIcon";
import CardImg from "./CardImg";

function CardShop() {
  return (
    <div className="flex flex-col gap-1 my-2">
      <CardImg />
      <div className="ml-2 flex flex-col items-center">
        <h1 className="text-xl font-medium">Misaka Mikoto</h1>
        <h2 className="text-gray-500">this is details for this item</h2>
        <h2 className="text-xl">3000 Baht</h2>
        <ShopIcon title="Shop now" />
      </div>
    </div>
  );
}

export default CardShop;
