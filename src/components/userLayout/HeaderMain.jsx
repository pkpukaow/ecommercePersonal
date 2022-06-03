import { BiCart, BiSearch, BiUser } from "react-icons/bi";

function HeaderMain() {
  return (
    <div className="px-[80px] gap-5 flex justify-between items-center h-[5.5rem]  bg-gray-600">
      <div className="">Logo</div>
      <div className="p-1 px-4 bg-white rounded border border-black flex justify-center items-center grow">
        <BiSearch className="text-gray-400 mt-1 mr-1" />
        <input
          type="text"
          placeholder="Search"
          className="flex grow focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center gap-9">
        <div className="text-white">In-stock</div>
        <div className="text-white">Pre-order</div>
        <BiCart className="text-white" type="button" />
        <BiUser className="text-white" type="button" />
      </div>
    </div>
  );
}

export default HeaderMain;
