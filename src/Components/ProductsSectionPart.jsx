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
      onClick={handleProductSection}
      className={` z-20 w-[200px] duration-700 bg-purple-400 h-[350px] rounded-lg ${
        isActive ? " duration-700 bg-red-400 w-[570px]" : ""
      } `}
    >
      <button
        id="electronics"
        onClick={openProductsBox}
        className=" pointer-events-auto group overflow-hidden hover:bg-slate-600 active:scale-90 hover:text-white duration-200 flex flex-row gap-6 justify-center items-center border border-black py-2 pl-4 pr-6 rounded-full uppercase"
      >
        {name}
      </button>
    </div>
  );
};

export default ProductsSectionPart;
