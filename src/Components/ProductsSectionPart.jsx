import React, { useEffect } from "react";
import useGeneralStore from "../store/GeneralStore";
import useCategoriesStore from "../store/CategoryStore";
import useProductsStore from "../store/ProductStore";

const ProductsSectionPart = ({ product: { id, name, isActive } }) => {
  const { setProductsBox } = useGeneralStore();
  const { activeProductSection, activeCategory, openProductSection } =
    useCategoriesStore();
  const { products, boxProducts, setBoxProducts } = useProductsStore();
  const handleProductSection = () => {
    activeProductSection(id);
  };
  const openProductsBox = () => {
    setProductsBox();
    openProductSection(name);
  };

  return (
    <div
      className={` relative z-20 w-[200px] duration-700 bg-purple-400 h-[350px] rounded-lg ${
        isActive ? " duration-700 bg-red-400 w-[570px]" : ""
      } `}
    >
      <button
        id="electronics"
        className={` ${
          !isActive ? " w-[42px]" : " w-[180px]"
        } h-[42px] absolute top-0 right-0 pointer-events-auto group overflow-hidden hover:bg-slate-200 bg-green-500 active:scale-90 duration-200 hover:text-black flex justify-end border border-black rounded-full uppercase`}
      >
        <div
          className={` ${
            isActive ? " translate-x-0" : " -translate-x-10"
          } bg-red-500 flex flex-row items-center duration-500 p-2`}
          onClick={openProductsBox}
        >
          <p>See More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <span
          className={` ${
            isActive ? " translate-x-10" : " translate-x-0 "
          } duration-500 flex items-center bg-red-500`}
          onClick={handleProductSection}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 p-1 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default ProductsSectionPart;
