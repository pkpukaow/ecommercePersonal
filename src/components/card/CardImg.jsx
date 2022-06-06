import defaultPic from "../../assets/picforbg/misaka.jfif";

function CardImg({ src, width, height }) {
  return (
    <div className="w-[300px] h-[300px] mx-auto">
      <img
        className="object-cover h-full rounded border mx-auto border-black w-full"
        src={src || defaultPic}
        alt="CardImg"
        width={width}
        height={height}
      />
    </div>
  );
}

export default CardImg;
