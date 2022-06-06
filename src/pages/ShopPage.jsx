import SortByIcon from "../components/button/SortByIcon";
import CardShop from "../components/card/CardShop";

function ShopPage() {
  return (
    <div className="bg-gray-200">
      <div className="pt-8 flex justify-center items-center gap-10 font-medium text-2xl text-white">
        <SortByIcon title="Pre-order" />
        <SortByIcon title="All-item" />
        <SortByIcon title="In-stock" />
      </div>
      <div className="p-5 gap-3 grid grid-cols-4">
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
      </div>
    </div>
  );
}

export default ShopPage;
