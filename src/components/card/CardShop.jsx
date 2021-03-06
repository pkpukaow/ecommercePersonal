import ShopIcon from "../button/ShopIcon";
import CardImg from "./CardImg";

function CardShop({ title, detail, price, onClick, src }) {
  return (
    <div className="flex flex-col gap-1 my-2">
      <CardImg src={src} />
      <div className="ml-2 flex flex-col items-center">
        <h1 className="text-xl font-medium">{title}</h1>
        <h2 className="text-gray-500">{detail}</h2>
        <h2 className="text-xl">{price} Baht</h2>
        <ShopIcon title="Shop now" onClick={onClick} />
      </div>
    </div>
  );
}

export default CardShop;
