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
          productsItemBox && " translate-y-32 opacity-100 "
        } z-[999999998] backdrop-blur-sm opacity-0 -translate-y-full duration-500 h-[500px] w-[800px] fixed bottom-56 right-[350px] rounded-2xl bg-slate-400 bg-opacity-70 p-5 shadow-2xl `}
      >
        {itemBoxProducts.map((itemBoxProduct) => (
          <ProductsItemBoxSection key={itemBoxProduct.id} itemBoxProduct={itemBoxProduct}/>
        ))}
      </div>

      <div
        onClick={setProductsItemBox}
        className={`${
          productsItemBox &&
          " translate-y-[px] backdrop-blur-sm opacity-100 fixed top-0 left-0 bg-slate-100 bg-opacity-75 w-[1519px] h-screen z-[999999997] "
        } opacity-0 -translate-y-[1300px] duration-300`}
      ></div>
    </div>
  );
};

export default ProductsItemBox;
