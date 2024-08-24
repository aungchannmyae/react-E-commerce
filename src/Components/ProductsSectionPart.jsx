import React, { useEffect } from "react";
import useGeneralStore from "../store/GeneralStore";
import useCategoriesStore from "../store/CategoryStore";
import useProductsStore from "../store/ProductStore";
import ProductsSectionCarousel from "./ProductsSectionCarousel";

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
      className={` relative z-20 overflow-hidden w-[200px] duration-700 h-[350px] rounded-lg ${
        isActive ? " duration-700 w-[570px]" : ""
      } `}
    >
      <button
        id="electronics"
        className={` ${
          !isActive ? " w-[42px]" : " w-[120px]"
        } z-[99999] h-[42px] absolute top-0 right-0 pointer-events-auto group overflow-hidden hover:bg-slate-200 active:scale-90 duration-200 hover:text-black flex justify-end border border-black rounded-full uppercase`}
      >
        <div
          className={` ${
            isActive
              ? " animate-pulse translate-x-10"
              : " -translate-x-10 flex flex-row items-center"
          } text-black w-[140px] flex flex-row items-center duration-500 p-2`}
          onClick={openProductsBox}
        >
          <p className=" w-[80px]">See More</p>
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
            isActive ? " translate-x-10" : " translate-x-0 flex items-center"
          } text-black duration-500 flex items-center`}
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
      <div className={` ${!isActive && "pointer-events-none"} h-full carousel carousel-center bg-red-600 w-fit space-x-4 p-0`}>
        {products
          .filter((el) => el.category === name)
          .map((el) => {
            return <ProductsSectionCarousel key={el.id} image={el.image} />;
          }).slice(0,4)}
      </div>
    </div>
  );
};

export default ProductsSectionPart;
