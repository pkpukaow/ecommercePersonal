import { useEffect, useRef, useState } from "react";
import refPic_1 from "../../assets/picforbg/img1_carousel.jpg";
import refPic_2 from "../../assets/picforbg/img2_carousel.jpg";
import refPic_3 from "../../assets/picforbg/img3_carousel.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const featuredProducts = [refPic_1, refPic_2, refPic_3];

let count = 0;
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  // useEffect(() => {
  //   startSilder();
  // }, []);

  // const startSilder = () => {
  //   setInterval(() => {
  //     handleOnNextClick();
  //   }, 3000);
  // };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  return (
    <div className="w-full" ref={slideRef}>
      <div className="flex justify-center">
        <img
          className="object-cover w-full"
          src={featuredProducts[currentIndex]}
          alt=""
        ></img>
        <div className="absolute text-2xl px-12 top-[61%] transform -translate-y-1 w-full flex justify-between items-center">
          <button
            className="bg-white rounded p-2 border border-black"
            onClick={handleOnNextClick}
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            className="bg-white rounded p-2 border border-black"
            onClick={handleOnPrevClick}
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
