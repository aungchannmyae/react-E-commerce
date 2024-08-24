
import { HiShoppingCart } from "react-icons/hi";
import React, { useContext } from "react";
import useProductsStore from "../store/ProductStore";
import useGeneralStore from "../store/GeneralStore";

const NewArrivalSection2 = ({
  newProduct: { id, title, image, price , description },
}) => {

  const { setProductsItemBox} = useGeneralStore();
    const {filterItemBoxProducts } = useProductsStore();
    const handleItemBoxProducts = () => {
        setProductsItemBox();
        filterItemBoxProducts(id);
    
      }
  return (
    <div
    onClick={ handleItemBoxProducts}
      key={id}
      className=" cursor-pointer rounded-lg group duration-300 shadow-lg bg-white w-[280px] col-span-1 border"
    >
      <div className=" flex flex-col justify-center m-1 p-4 ">
        <div>
          <img
            className=" duration-500 group-hover:scale-90 py-5 mx-auto h-[200px] mb-2"
            src={image}
            alt=""
          />
        </div>
        <div className=" text-black h-[100px] flex flex-col gap-0">
          <h1 className=" h-[60px] box-heading-text text-md line-clamp-2 font-semibold ">
            {title}
          </h1>
          <span className="">$ {price}</span>
        </div>
        <div className=" text-red-600 flex flex-row items-end justify-start gap-2">
            <HiShoppingCart className="h-5 w-5" />
            Add To Cart
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSection2;
