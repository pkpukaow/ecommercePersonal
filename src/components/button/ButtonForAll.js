function ButtonForAll({ title, color, fontColor, onHover }) {
  return (
    <button className={`rounded px-2 py-1 ${color} ${fontColor} ${onHover}`}>
      {title}
    </button>
  );
}

export default ButtonForAll;
