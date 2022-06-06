import ButtonForAll from "../button/ButtonForAll";
import CardShop from "../card/CardShop";
import defaultPic from "../../assets/picforbg/cover_img.jpg";
import { Link } from "react-router-dom";

function MidDivHomePage() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <img className="w-[88%]" src={defaultPic} alt="" />
      </div>
      <div>
        <div className="flex justify-between px-12 py-5">
          <h1 className="text-3xl font-medium">Hot Item</h1>
          <Link to="/shop">
            <ButtonForAll
              color="bg-white"
              onHover="hover:bg-blue-500 hover:text-white"
              title="View All"
            />
          </Link>
        </div>
        <div className="grid grid-cols-3">
          <CardShop />
          <CardShop />
          <CardShop />
        </div>
      </div>
      <div>
        <div className="flex justify-between px-12 py-5">
          <h1 className="text-3xl font-medium">New Item</h1>
          <Link to="/shop">
            <ButtonForAll
              color="bg-white"
              onHover="hover:bg-blue-500 hover:text-white"
              title="View All"
            />
          </Link>
        </div>
        <div className="grid grid-cols-4">
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
        </div>
      </div>
    </div>
  );
}

export default MidDivHomePage;
