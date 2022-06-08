import { BiUser } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function DropdownHeader() {
  const { logout, user } = useAuth();
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      role="button"
      className="relative inline-block"
      ref={dropdownRef}
      onClick={handleClick}
    >
      <BiUser className="text-white" />
      <div
        className={`bg-white px-2 flex flex-col absolute z-10 rounded border min-w-[110px] border-black
      ${isOpen ? "block" : "hidden"}`}
      >
        <Link to="/profile/:id">Edit Profile</Link>
        {user === "admin" && <Link to="/admin">Edit Item</Link>}
        <Link to="/login" onClick={logout}>
          Log out
        </Link>
      </div>
    </div>
  );
}

export default DropdownHeader;
