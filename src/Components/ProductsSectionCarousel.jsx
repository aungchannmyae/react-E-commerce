import React from "react";

const ProductsSectionCarousel = ({ image}) => {
  return (
    <div className=" shadow-xl carousel-item">
      <div className=" rounded-xl bg-white flex justify-center items-center">
        <img src={image} className=" max-md:w-[100px] md:w-[180px] lg:w-[220px] xl:w-[250px] max-md:p-3 md:p-5 p-14" />
      </div>
    </div>
  );
};

export default ProductsSectionCarousel;
