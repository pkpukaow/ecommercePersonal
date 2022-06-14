function SortByIcon({ title, onClick, isFocused = false }) {
  return (
    <button
      className={`py-1 px-3 rounded ${
        isFocused ? "bg-blue-800" : "bg-blue-300"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default SortByIcon;
