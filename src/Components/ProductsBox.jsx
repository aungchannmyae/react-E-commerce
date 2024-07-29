import { Button } from "flowbite-react";
import React from "react";

const ProductsBox = ({
  categories,
  products,
  productsBox,
  HandleProductsBox,
  HandleCategoryProducts,
  HandleProductsItemBox,
  boxProducts,
}) => {
  return (
    <div>
      <div
        className={` ${
          productsBox && " translate-y-0 opacity-100 "
        } z-[999999] opacity-0 -translate-y-full duration-500 h-[650px] fixed top-5 right-40 rounded-2xl bg-slate-300 p-10 w-[1200px] overflow-hidden`}
      >
        <div className=" w-full">
          <div className=" grid grid-cols-11 gap-4">
            <div className=" col-span-3 search-bar rounded-lg px-5 bg-slate-200 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                placeholder="Search"
                type="text"
                className=" bg-slate-200 border-0 w-full select-none outline-0 focus:ring-0 focus:outline-none"
              />
            </div>

            <div className=" col-span-7 category-bar flex gap-2 overflow-x-auto ">
              <button
              
                id="submit"
                onClick={HandleCategoryProducts}
                className=" active:scale-90 active:bg-cyan-500 focus:bg-cyan-500 duration-300 w-[80px] border border-black rounded-lg"
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  onClick={HandleCategoryProducts}
                  id={Date.now()}
                  className=" px-2 active:scale-90 active:bg-cyan-500 focus:bg-cyan-500 duration-300 text-nowrap border border-black rounded-lg"
                  color="light"
                >
                  {category}
                </button>
              ))}
            </div>
            <div
              onClick={HandleProductsBox}
              className=" ml-auto active:scale-90 col-span-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10 p-2 hover:bg-red-700 hover:scale-110 duration-200 hover:text-white bg-white rounded-md"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="">
            <div className=" scrollbar-hide grid grid-flow-row grid-cols-5 gap-3 rounded-lg bg-slate-100 mt-10 p-1 h-[488px] overflow-y-scroll">
              {boxProducts.map(
                ({ id, image, title, description, price, rating }) => (
                  <div
                  onClick={HandleProductsItemBox}
                    key={id}
                    className=" group duration-100 active:scale-95 col-span-1 h-[250px] bg-white rounded-md"
                  >
                    <img className=" group-hover:scale-95 duration-200 w-[70px]" src={image} alt="" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={HandleProductsBox}
        className={`${
          productsBox &&
          " translate-y-0 opacity-100 fixed top-0 left-0 bg-slate-100 bg-opacity-75 w-[1519px] h-screen z-[999997]"
        } opacity-0 -translate-y-full duration-300`}
      ></div>
    </div>
  );
};

export default ProductsBox;
