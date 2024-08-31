import React, { useContext, useState } from "react";
import ProductsItemBox from "./ProductsItemBox";
import useGeneralStore from "../store/GeneralStore";
import useProductsStore from "../store/ProductStore";
import CartDrawerItems from "./CartDrawerItems";

const CartDrawer = ({}) => {
  const { cartDrawer, setCartDrawer } = useGeneralStore();
  const { carts } = useProductsStore();
  const total = carts.reduce((pv,cv) => 
    pv + cv.cost , 0
  )

  return (
    <div className=" select-none">
      <div
        className={` ${
          cartDrawer && " translate-x-[px] "
        } backdrop-blur-sm p-5 duration-700 translate-x-[500px] z-[999999999] fixed top-6 right-5 bg-slate-400 bg-opacity-60 h-[650px] w-[400px] rounded-2xl`}
      >
        <div className=" flex flex-col h-full">
          <div className=" flex justify-between items-center p-1">
            <div>
              <h1 className=" flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Your Cart (<span>{carts.length}</span>)
              </h1>
            </div>
            <div
              className=" active:scale-90 cursor-pointer"
              onClick={setCartDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 ml-auto p-2 hover:bg-red-700 hover:scale-110 duration-200 hover:text-white bg-white rounded-md"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className=" h-[450px] my-3 p-1 scroll-smooth">
            <div className=" scrollbar-hide flex flex-col gap-2 bg-white rounded-lg h-full overflow-x-hidden overflow-y-auto">
              {carts.map((cart) => (
                <CartDrawerItems key={cart.id} cart={cart} />
              ))}
            </div>
          </div>
          <div className=" mt-auto p-1">
            <div className=" flex justify-between items-center">
              <h1>Total (Taxed)</h1>
              <span>{total.toFixed(2)}</span>
            </div>
            <button className=" w-full py-2 flex justify-center items-center bg-red-600 rounded-lg">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
