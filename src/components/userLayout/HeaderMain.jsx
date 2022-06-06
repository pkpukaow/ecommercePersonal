import { BiCart, BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import logoImg from "../../assets/picforbg/Logo_img.png";

function HeaderMain() {
  return (
    <div className="px-[90px] gap-5 flex justify-between items-center h-[6.5rem]  bg-purple-600">
      <div>
        <Link to="/">
          <img src={logoImg} className="w-[105px]" alt="" />
        </Link>
      </div>
      <div className="p-1 px-4 bg-white rounded border border-black flex justify-center items-center grow">
        <BiSearch className="text-gray-400 mt-1 mr-1" />
        <input
          type="text"
          placeholder="Search"
          className="flex grow focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center gap-9 text-lg">
        <Link to="/shop">
          <button className="text-purple-200">In-stock</button>
        </Link>
        <Link to="/shop">
          <button className="text-purple-200">Pre-order</button>
        </Link>
        <button>
          <BiCart className="text-purple-200 text-xl" />
        </button>
        <button>
          <BiUser className="text-purple-200 text-xl" />
        </button>
      </div>
    </div>
  );
}

export default HeaderMain;
