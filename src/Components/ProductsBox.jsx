import { Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import CategoriesProvider, {
  CategoryContext,
} from "../Context/CategoriesProvider";
import { ProductContext } from "../Context/ProductsProvider";
import useCategoriesStore from "../store/CategoryStore";
import CategoryBtn from "./CategoryBtn";
import ProductsBoxItem from "./ProductsBoxItem";
import useProductsStore from "../store/ProductStore";
import useGeneralStore from "../store/GeneralStore";

const ProductsBox = ({}) => {
  const { productsBox, setProductsBox } = useGeneralStore();
  const { categories } = useCategoriesStore();
  const { products, boxProducts, setBoxProducts } = useProductsStore();

  const currentProducts = categories.find((el) => el.isActive === true);

  return (
    <div>
      <div
        className={` ${
          productsBox
            ? " translate-y-0 opacity-100 duration-300"
            : "opacity-0 -translate-y-full duration-300"
        } fixed top-0 right-0 w-full h-screen z-[999]`}
      >
        <div className=" flex justify-center items-center lg:mt-8 xl:mt-5">
          <div
            className={` duration-500 lg:h-[800px] xl:h-[650px] rounded-2xl bg-slate-300 p-10 lg:w-[940px] xl:w-[1200px] z-[9999] overflow-hidden shadow-2xl`}
          >
            <div className=" w-full">
              <div className=" grid grid-cols-11 gap-4">
                <div className=" *:cursor-not-allowed col-span-3 search-bar rounded-lg px-5 bg-slate-200 flex items-center">
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
                  {categories.map((category) => (
                    <CategoryBtn key={category.id} category={category} />
                  ))}
                </div>
                <div
                  onClick={setProductsBox}
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
                <div className=" scrollbar-hide grid grid-flow-row lg:grid-cols-4 xl:grid-cols-5 gap-3 rounded-lg bg-slate-100 mt-10 p-1 lg:h-[640px] xl:h-[488px] overflow-y-scroll">
                  {products
                    .filter(
                      (product) =>
                        currentProducts.name === "All" ||
                        product.category === currentProducts.name
                    )
                    .map((product) => (
                      <ProductsBoxItem key={product.id} product={product} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={setProductsBox}
          className={`${
            productsBox
              ? " translate-y-0 backdrop-blur-sm duration-300 opacity-100"
              : " opacity-0 -translate-y-full duration-300"
          } fixed top-0 left-0 bg-slate-100 bg-opacity-75 w-[1519px] h-screen z-[9998]`}
        ></div>
      </div>
    </div>
  );
};

export default ProductsBox;
