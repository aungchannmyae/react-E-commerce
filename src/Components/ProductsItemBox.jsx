import React, { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import useProductsStore from "../store/ProductStore";
import useGeneralStore from "../store/GeneralStore";

const ProductsItemBox = ({}) => {
  const { productsItemBox, setProductsItemBox } = useGeneralStore();
  const { products, itemBoxProducts } = useProductsStore();
  return (
    <div>
      <div
        className={` ${
          productsItemBox && " translate-y-32 opacity-100 "
        } z-[999999998] backdrop-blur-sm shadow-2xl opacity-0 -translate-y-full duration-500 h-[500px] w-[800px] fixed bottom-56 right-[350px] rounded-2xl bg-slate-400 bg-opacity-70 p-5 `}
      >
        <div className=" overflow-hidden grid grid-cols-3 gap-3 bg-white rounded-lg h-full ">
          {itemBoxProducts.map((itemBoxProduct) => (
            <div className=" overflow-hidden col-span-2 flex gap-2 p-3">
              <div className=" w-1/2 bg pt-10 flex flex-col items-center gap-5 ">
                <img
                  className=" w-3/5 "
                  src={itemBoxProduct.image}
                  alt=""
                />
                <div className=" w-full flex flex-col justify-start gap-2">
                  <h1 className=" text-xl font-mono">Sale Price</h1>
                  <p className=" text-red-600 font-bold text-[50px]">$ {itemBoxProduct.price}</p>
                  <span>stars</span>
                </div>
              </div>
              <div className=" w-1/2 pt-10 h-full">
                <h1 className=" flex justify-center mb-5 items-center text-lg font-semibold text-center ">
                  {itemBoxProduct.title}
                </h1>
                <p className=" h-[200px] overflow-y-scroll text-center mb-5 text-pretty text-sm scrollbar-hide">
                  {itemBoxProduct.description}
                </p>
                <div className=" select-none cursor-pointer flex flex-row items-center justify-center font-semibold hover-2 active:scale-105 duration-100 bg-red-600 gap-2 py-2 px-3 rounded-lg">
                  <HiShoppingCart className=" h-5 w-5" />
                  Add To Cart
                </div>
              </div>
            </div>
          ))}
          <div className=" col-span-1 bg-slate-200 my-3 mr-3 rounded-lg shadow-xl">

          </div>
        </div>
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
