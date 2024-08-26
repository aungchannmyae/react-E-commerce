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
        isActive ? " duration-700 w-[835px]" : " w-[100px]"
      } `}
    >
      <button
        id="electronics"
        className={` ${
          !isActive ? " w-[42px]" : " w-[125px]"
        } z-[99999] h-[42px] shadow-2xl bg-red-600 absolute top-0 right-0 pointer-events-auto group overflow-hidden hover:bg-red-400 active:scale-90 duration-200 hover:text-black flex justify-end rounded-bl-3xl uppercase`}
      >
        <div
          className={` ${
            isActive
              ? " animate-pulse translate-x-10"
              : " -translate-x-10 flex flex-row items-center"
          } text-black font-semibold w-[140px] flex flex-row items-center duration-1000 p-2`}
          onClick={openProductsBox}
        >
          <p className=" w-[80px]">See More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 ml-2"
          >
            <path
              fillRule="evenodd"
              d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span
          className={` ${
            isActive ? " translate-x-10" : " translate-x-0 flex items-center"
          } text-black duration-1000 flex items-center`}
          onClick={handleProductSection}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 p-2 animate-pulse "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </button>
      <div
        className={` ${
          !isActive && "pointer-events-none"
        } bg-transparent h-full scroll-smooth carousel carousel-center space-x-4 p-0`}
      >
        {products
          .filter((el) => el.category === name)
          .map((el) => {
            return <ProductsSectionCarousel key={el.id} image={el.image} />;
          })
          .slice(0, 4)}
      </div>
      <div> 
        <div className={` ${ isActive ? " translate-y-0 duration-1000" : " -translate-y-20"} uppercase bg-red-600 text-black shadow-xl py-1.5 rounded-br-3xl rounded-tl-lg px-5 text-nowrap absolute top-0 left-0`}>
          <p><span className=" font-semibold text-lg italic">{name}</span> Collections</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsSectionPart;
