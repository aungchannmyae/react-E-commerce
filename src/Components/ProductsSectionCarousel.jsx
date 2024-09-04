import React from "react";

const ProductsSectionCarousel = ({ image}) => {
  return (
    <div className=" shadow-xl carousel-item">
      <div className=" rounded-xl bg-white flex justify-center items-center">
        <img src={image} className=" lg:w-[220px] xl:w-[250px] p-14" />
      </div>
    </div>
  );
};

export default ProductsSectionCarousel;
