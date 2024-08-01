import React, { useContext } from "react";
import Container from "./Container";
import { Button, Carousel } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import { ProductContext } from "../Context/ProductsProvider";
import { CategoryContext } from "../Context/CategoriesProvider";
import { GeneralContext } from "../Context/GeneralProvider";

const NewArrivals = ({ }) => {
  const { products} = useContext(ProductContext);
  const { categories} = useContext(CategoryContext);
  const {HandleProductsBox, HandleProductsItemBox} = useContext(GeneralContext);
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
            {products
              .filter((product) => product.id < 5)
              .map(({ id, image, title, description }) => (
                <div
                  key={id}
                  className=" rounded-xl group duration-300 hover:scale-105 shadow-lg bg-white w-[240px] col-span-1 border borderr"
                >
                  <div onClick={HandleProductsItemBox} className=" flex flex-col justify-center m-1 p-4 border border-black/50 border-t-0 border-r-0 border-b-1 border-l-1">
                    <div>
                      <img
                        className=" duration-700 group-hover:scale-125 mx-auto h-[100px] mb-2"
                        src={image}
                        alt=""
                      />
                    </div>
                    <div className=" h-[180px] flex flex-col gap-2">
                      <h1 className=" box-heading-text text-lg font-semibold underline underline-offset-auto">
                        {title}
                      </h1>
                      <p className=" box-inner-text text-sm">{description}</p>
                    </div>
                    <div className="">
                      <Button className="">
                        <HiShoppingCart className=" h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className=" bg-stone-100 flex justify-center items-center m-auto">
          <div className=" p-4 gap-20 grid grid-cols-4">
            {products
              .filter((product) => product.id > 16)
              .map(({ id, image, title, description }) => (
                <div
                  key={id}
                  className=" rounded-xl group duration-300 hover:scale-105 shadow-lg bg-white w-[240px] col-span-1 border"
                >
                  <div onClick={HandleProductsItemBox} className=" flex flex-col justify-center m-1 p-4 border border-black/50 border-t-0 border-r-0 border-b-1 border-l-1">
                    <div>
                      <img
                        className=" duration-700 group-hover:scale-125 mx-auto h-[100px] mb-2"
                        src={image}
                        alt=""
                      />
                    </div>
                    <div className=" h-[180px] flex flex-col gap-2">
                      <h1 className=" box-heading-text text-lg font-semibold underline underline-offset-auto">
                        {title}
                      </h1>
                      <p className=" box-inner-text text-sm">{description}</p>
                    </div>
                    <div className="">
                      <Button>
                        <HiShoppingCart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default NewArrivals;
