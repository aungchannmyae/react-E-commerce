import React, { useContext, useState } from "react";
import useProductsStore from "../store/ProductStore";
import { GeneralContext } from "../Context/GeneralProvider";

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
  const {productsItemBox, HandleProductsItemBox,} = useContext(GeneralContext);
  const { products, itemBoxProducts, filterItemBoxProducts} = useProductsStore();
  const handleItemBoxProducts = () => {
    HandleProductsItemBox();
    filterItemBoxProducts(id);

  }
  return (
    <div
    onClick={handleItemBoxProducts}
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
