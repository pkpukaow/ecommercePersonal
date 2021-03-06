function ShopIcon({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-2 rounded bg-blue-500 hover:bg-blue-800  px-2 py-1 text-white"
    >
      {title}
    </button>
  );
}

export default ShopIcon;
