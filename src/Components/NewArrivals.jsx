import React, { useContext } from "react";
import Container from "./Container";
import { Button, Carousel } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import { ProductContext } from "../Context/ProductsProvider";
import { CategoryContext } from "../Context/CategoriesProvider";
import { GeneralContext } from "../Context/GeneralProvider";
import useProductsStore from "../store/ProductStore";
import NewArrivalSection1 from "./NewArrivalSection1";
import NewArrivalSection2 from "./NewArrivalSection2";

const NewArrivals = ({}) => {
  const { products } = useContext(ProductContext);
  const { categories } = useContext(CategoryContext);
  const { HandleProductsBox, HandleProductsItemBox } =
    useContext(GeneralContext);
  const { newArrivalProductSection1, newArrivalProductSection2 } =
    useProductsStore();
  return (
    <div id="newArrivals" className=" my-5 m-auto w-[1400px] h-[400px]">
      <Carousel
        leftControl={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 bg-gray-200 p-2 rounded-full active:bg-gray-400 duration-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        }
        rightControl={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 bg-gray-200 p-2 rounded-full active:bg-gray-400 duration-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        }
        className=""
        indicators=""
        slideInterval={10000}
      >
        <div className=" bg-stone-100 flex justify-center items-center m-auto">
          <div className=" p-4 gap-20 grid grid-cols-4">
            {newArrivalProductSection1.map((newProduct) => (
              <NewArrivalSection1 key={newProduct.id} newProduct={newProduct} />
            ))}
          </div>
        </div>

        <div className=" bg-stone-100 flex justify-center items-center m-auto">
          <div className=" p-4 gap-20 grid grid-cols-4">
            {newArrivalProductSection2.map((newProduct) => (
              <NewArrivalSection2
                key={newProduct.key}
                newProduct={newProduct}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default NewArrivals;
