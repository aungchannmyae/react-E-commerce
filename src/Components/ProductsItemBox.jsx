import React from "react";

const ProductsItemBox = ({
  categories,
  products,
  productsItemBox,
  HandleProductsItemBox,
}) => {
  return (
    <div>
      
        <div
          className={` ${
            productsItemBox && " translate-y-32 opacity-100 "
          } z-[999999998] opacity-0 -translate-y-full duration-500 h-[500px] fixed bottom-52 right-[510px] rounded-2xl bg-zinc-500 bg-opacity-70 p-5 w-[500px] `}
        >
          <img src='' alt="" />
        </div>
      
      <div
        onClick={HandleProductsItemBox}
        className={`${
          productsItemBox &&
          " translate-y-[px] opacity-100 fixed top-0 left-0 bg-slate-100 bg-opacity-75 w-[1519px] h-screen z-[999999997] "
        } opacity-0 -translate-y-[1300px] duration-300`}
      ></div>
    </div>
  );
};

export default ProductsItemBox;
