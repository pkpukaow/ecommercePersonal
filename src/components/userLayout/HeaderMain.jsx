import { useState } from "react";
import { BiCart, BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/picforbg/Logo_img.png";
import DropdownHeader from "./DropdownHeader";

function HeaderMain() {
  const navigate = useNavigate();
  const [finditem, setFinditem] = useState("");

  const handleClickCart = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  return (
    <div className="px-[90px] gap-5 flex justify-between items-center h-[6.5rem]  bg-purple-600">
      <div>
        <Link to="/">
          <img src={logoImg} className="w-[105px]" alt="" />
        </Link>
      </div>
      <div className="p-1 px-4 bg-white rounded shadow-md flex justify-center items-center grow">
        <BiSearch className="text-gray-400 mt-1 mr-1" />
        <input
          type="text"
          value={finditem}
          onChange={(e) => setFinditem(e.target.value)}
          placeholder="Search"
          className="flex grow"
        />
      </div>
      <div className="flex justify-between items-center gap-9 text-lg mr-5">
        <Link to="/shop">
          <button className="text-purple-200">Shop now</button>
        </Link>
        <button>
          <BiCart
            onClick={handleClickCart}
            className="text-purple-200 text-xl"
          />
        </button>
        <DropdownHeader />
      </div>
    </div>
  );
}

export default HeaderMain;
