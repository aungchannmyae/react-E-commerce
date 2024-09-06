import React, { useContext } from "react";
import Container from "./Container";
import { Button, Carousel } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import { ProductContext } from "../Context/ProductsProvider";
import { CategoryContext } from "../Context/CategoriesProvider";
import { GeneralContext } from "../Context/GeneralProvider";
import useProductsStore from "../store/ProductStore";
import NewArrivalSection1 from "./NewArrivalSection1";

const NewArrivals = ({}) => {
  const { newArrivalProductSection1, newArrivalProductSection2 } =
    useProductsStore();
  return (
    <div id="newArrivals" className=" max-md:hidden my-5 m-auto lg:w-[950px] xl:w-[1250px] 2xl:w-[1400px] max-md:h-[440px] md:h-[480px] ">
      <div className=" -mb-7">
        <Container>
          <h1 className=" flex flex-row items-end text-lg underline underline-offset-4">
            New Arrivals Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </h1>
          <p className=" text-lg">
            Handpicked for You – Explore our latest arrivals
          </p>
        </Container>
      </div>
      <Carousel
        leftControl={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" max-sm:size-8 size-10 bg-slate-200 p-2 rounded-full active:bg-gray-400 duration-100"
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
            className=" max-sm:size-8 size-10 bg-slate-200 p-2 rounded-full active:bg-gray-400 duration-100"
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
        <div className=" rounded-xl cursor-default bg-slate-200 flex justify-center mx-auto">
          <div className=" max-md:p-2 lg:p-4 xl:p-6 max-md:gap-2 lg:gap-3 xl:gap-8 grid max-md:grid-cols-2 md:grid-cols-4">
            {newArrivalProductSection1.map((newProduct) => (
              <NewArrivalSection1 key={newProduct.id} newProduct={newProduct} />
            ))}
          </div>
        </div>

        <div className=" rounded-xl cursor-default bg-slate-200 flex justify-center mx-auto">
          <div className=" max-md:p-2 lg:p-4 xl:p-6 max-md:gap-2 lg:gap-3 xl:gap-8 grid max-md:grid-cols-2 grid-cols-4">
            {newArrivalProductSection2.map((newProduct) => (
              <NewArrivalSection1
                key={newProduct.id}
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
