import React from "react";

const ProductsSectionCarousel = ({ image}) => {
  return (
    <div className=" carousel-item">
      <div className=" rounded-lg bg-white flex justify-center items-center">
        <img src={image} className=" w-[200px] p-5" />
      </div>
    </div>
  );
};

export default ProductsSectionCarousel;
