import React from "react";

const ProductsBoxItem = ({
  boxProduct: {
    id,
    title,
    description,
    category,
    price,
    image,
    rating: { rate, count },
  },
}) => {
  return (
    <div
      key={id}
      className=" group duration-100 active:scale-95 col-span-1 h-[250px] bg-white rounded-md"
    >
      <img
        className=" group-hover:scale-95 duration-200 w-[70px]"
        src={image}
        alt=""
      />
    </div>
  );
};

export default ProductsBoxItem;
