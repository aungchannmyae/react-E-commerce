import React, { useContext, useState } from "react";
import useProductsStore from "../store/ProductStore";
import useGeneralStore from "../store/GeneralStore";
import Rating from "./Rating";

const ProductsBoxItem = ({
  product: {
    id,
    title,
    description,
    category,
    price,
    image,
    rating: { rate, count },
  },
}) => {
  const { setProductsItemBox } = useGeneralStore();
  const { products, itemBoxProducts, filterItemBoxProducts, carts } =
    useProductsStore();
  const handleItemBoxProducts = () => {
    setProductsItemBox();
    filterItemBoxProducts(id);
  };
  return (
    <div
      onClick={handleItemBoxProducts}
      key={id}
      className={` px-2 flex flex-col group duration-200 active:scale-95 col-span-1 h-[280px] bg-white rounded-md`}
    >
      <div className=" h-[160px] flex items-center justify-start border-b-[1px] border-b-black">
        <img
          className=" group-hover:scale-95 duration-200 md:h-[110px] lg:h-[130px] xl:h-[150px]"
          src={image}
          alt=""
        />
      </div>
      <div className=" flex flex-col gap-2">
        <h1 className=" line-clamp-2 font-mono h-12">{title}</h1>
        <div className=" flex flex-col ">
          <p className=" italic">$ {price}</p>
          <Rating rate={rate}/>
        </div>
      </div>
    </div>
  );
};

export default ProductsBoxItem;
