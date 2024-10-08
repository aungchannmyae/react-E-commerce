import React, { useContext, useState } from "react";
import Container from "./Container";
import useGeneralStore from "../store/GeneralStore";
import useProductsStore from "../store/ProductStore";

const NavBar = ({  }) => {

  const { setCartDrawer, setProductsBox} = useGeneralStore();
  const { products, boxProducts, setBoxProducts, carts } = useProductsStore();
  // const openProductsBox = () => {
  //   setProductsBox();
  //   setBoxProducts(products);
  // }

  return (
    <Container>
      <nav className=" max-md:hidden border border-r-0 border-l-0 border-black select-none">
        <div className=" flex max-sm:justify-between max-sm:px-4 max-md:justify-around justify-between items-center">
          <div onClick={setProductsBox} className=" cursor-pointer flex justify-center items-center w-[50px] max-md:py-2 py-3 hover:scale-125 duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          <div className=" max-sm:hidden flex">
            <div className=" border border-t-0 border-b-0 border-l-0 border-r-black justify-center items-center flex">
              <a
                href="#newArrivals"
                className=" max-md:py-1 max-md:px-2 md:py-2 md:px-3 lg:py-3 lg:px-5 text-lg hover:underline hover:text-xl duration-500"
              >
                Latest Arrivals
              </a>
            </div>
            <div className=" border border-t-0 border-b-0 border-l-0 border-r-black justify-center items-center flex">
              <a
                href="#favorite"
                className=" max-md:py-1 max-md:px-2 md:py-2 md:px-3 lg:py-3 lg:px-5 text-lg hover:underline hover:text-xl duration-500"
              >
                Favorite
              </a>
            </div>
            <div className=" border border-t-0 border-b-0 border-l-0 border-r-black justify-center items-center flex">
              <a
                href="#categories"
                className=" max-md:py-1 max-md:px-2 md:py-2 md:px-3 lg:py-3 lg:px-5 text-lg hover:underline hover:text-xl duration-500"
              >
                Categories
              </a>
            </div>
            <div className=" border border-t-0 border-b-0 border-l-0 border-r-black justify-center items-center flex">
              <a
                href="#commercial"
                className=" max-md:py-1 max-md:px-2 md:py-2 md:px-3 lg:py-3 lg:px-5 text-lg hover:underline hover:text-xl duration-500"
              >
                Commercial
              </a>
            </div>
            <div className="  justify-center items-center flex">
              <a
                href="#aboutUs"
                className=" max-md:py-1 max-md:px-2 md:py-2 md:px-3 lg:py-3 lg:px-5 text-lg hover:underline hover:text-xl duration-500"
              >
                About Us
              </a>
            </div>
          </div>
          
          <div
            onClick={setCartDrawer}
            className=" relative active:scale-90 cursor-pointer flex justify-center items-center w-[50px] max-md:py-2 py-3 hover:scale-110 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            <span className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 skew-y-12 bg-red-600 text-white px-2 rounded">
            {carts.length}
          </span>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
