import defaultPic from "../../assets/picforbg/peopleDefault.jpg";

function CardTransaction({ src, width, height }) {
  return (
    <div
      className={`${width ? width : "w-[150px]"} ${
        height ? height : "h-[150px]"
      } mx-auto`}
    >
      <img
        className="object-cover h-full rounded border mx-auto border-black w-full"
        src={src || defaultPic}
        alt="CardImg"
      />
    </div>
  );
}

export default CardTransaction;
