import defaultPic from "../../assets/picforbg/misaka.jfif";

function CardImg({ src, width, height }) {
  return (
    <div
      className={`${width ? width : "w-[300px]"} ${
        height ? height : "h-[300px]"
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

export default CardImg;
