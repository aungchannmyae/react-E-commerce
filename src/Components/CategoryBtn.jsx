import React from "react";
import useCategoriesStore from "../store/CategoryStore";
import useProductsStore from "../store/ProductStore";

const CategoryBtn = ({ category: { id, name, isActive } } ) => {
  const { activeCategory } = useCategoriesStore();
  const { filterProduct, products } = useProductsStore();
  const HandleCategoryBtn = () => {
    activeCategory(id);;
  };

  return (
    <button
      onClick={HandleCategoryBtn}
      key={id}
      className={` ${
        isActive ? " bg-red-600" : " bg-white"
      } px-2 active:scale-90 duration-300 text-nowrap border border-black rounded-lg`}
    >
      {name}
    </button>
  );
};

export default CategoryBtn;
