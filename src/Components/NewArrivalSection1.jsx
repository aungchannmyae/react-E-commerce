import { HiShoppingCart } from "react-icons/hi";
import React, { useContext } from "react";
import useProductsStore from "../store/ProductStore";
import useGeneralStore from "../store/GeneralStore";

const NewArrivalSection1 = ({ newProduct }) => {
  const { setProductsItemBox } = useGeneralStore();
  const { filterItemBoxProducts, setCart, carts } = useProductsStore();
  const handleItemBoxProducts = () => {
    setProductsItemBox();
    filterItemBoxProducts(newProduct.id);
  };
  const handleCartProducts = () => {
    setCart(newProduct, newProduct.price);
  };
  return (
    <div
      onClick={handleItemBoxProducts}
      key={newProduct.id}
      className=" cursor-pointer rounded-lg group duration-300 shadow-lg bg-white md:w-[160px] lg:w-[220px] xl:w-[280px] col-span-1 border "
    >
      <div className=" flex flex-col justify-center m-1 max-md:p-2 md:p-2 lg:p-4">
        <div>
          <img
            className=" duration-500 group-hover:scale-90 max-md:py-0 py-5 mx-auto max-md:h-[60px] md:h-[140px] lg:h-[180px] xl:h-[200px] mb-2"
            src={newProduct.image}
            alt=""
          />
        </div>
        <div className=" text-black max-md:h-[50px] h-[100px] flex flex-col gap-0">
          <h1 className=" max-md:h-[25px] lg:h-[50px] xl:h-[60px] box-heading-text max-md:text-sm lg:text-base xl:text-lg line-clamp-2 font-semibold ">
            {newProduct.title}
          </h1>
          <span className="">$ {newProduct.price}</span>
        </div>
        <div>
          {carts.find((cart) =>
            cart.product.id === newProduct.id) ? (
              <button
              disabled={true}
                onClick={handleCartProducts}
                className=" duration-300 text-red-600 flex flex-row items-end justify-start gap-2"
              >
                <HiShoppingCart className=" h-5 w-5" />
                Added
              </button>
            ) : (
              <button
              disabled={false}
                onClick={handleCartProducts}
                className=" duration-300 text-red-600 flex flex-row items-end justify-start gap-2"
              >
                <HiShoppingCart className=" h-5 w-5" />
                Add To Cart
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSection1;
