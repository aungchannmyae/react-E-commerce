import React, { useContext } from "react";

import useProductsStore from "../store/ProductStore";
import useGeneralStore from "../store/GeneralStore";
import ProductsItemBoxSection from "./ProductsItemBoxSection";

const ProductsItemBox = ({}) => {
  const { productsItemBox, setProductsItemBox } = useGeneralStore();
  const { products, itemBoxProducts } = useProductsStore();

  return (
    <div>
      <div
        className={` ${
          productsItemBox
            ? " translate-y-0 opacity-100 duration-300"
            : "opacity-0 -translate-y-full duration-500"
        } fixed top-0 right-0 w-full h-screen z-[999]`}
      >
        <div className=" flex justify-center items-center md:mt-5 lg:mt-10 xl:mt-20">
          <div
            className={` z-[9999] backdrop-blur-sm max-md:h-full md:h-[500px] max-md:w-full md:w-[800px] rounded-2xl bg-slate-400 bg-opacity-70 p-5 shadow-2xl `}
          >
            {itemBoxProducts.map((itemBoxProduct) => (
              <ProductsItemBoxSection
                key={itemBoxProduct.id}
                itemBoxProduct={itemBoxProduct}
              />
            ))}
          </div>
        </div>

        <div
          onClick={setProductsItemBox}
          className={`${
            productsItemBox
              ? " translate-y-[px] backdrop-blur-sm duration-200 opacity-100"
              : " opacity-0 -translate-y-[1300px] duration-500"
          } fixed top-0 left-0 bg-slate-100 bg-opacity-75 w-[1519px] h-screen z-[9998] `}
        ></div>
      </div>
    </div>
  );
};

export default ProductsItemBox;
