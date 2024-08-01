import React, { useContext, useState } from "react";
import Container from "./Container";
import { GeneralContext } from "../Context/GeneralProvider";
import { ProductContext } from "../Context/ProductsProvider";
import { CartContext } from "../Context/CartsProvider";

const NavBar = ({  }) => {
  // const [cartDrawer, SetCartDrawer] = useState(false);
  // const HandleCartDrawer = () => {
  //     SetCartDrawer(!cartDrawer)
  // }
  const {cartDrawer, HandleCartDrawer, HandleProductsBox } = useContext(GeneralContext)
  const {HandleCategoryProducts} = useContext(ProductContext)
  const {carts} = useContext(CartContext);

  return (
    <Container>
      <nav className=" border border-r-0 border-l-0 border-black select-none">
        <div className=" flex justify-between items-center">
          <div onClick={HandleProductsBox} className=" cursor-pointer flex justify-center items-center w-[50px] py-3 hover:scale-125 duration-300">
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

          <div className=" flex">
            <div className=" border border-t-0 border-b-0 border-l-0 border-r-black justify-center items-center flex">
              <a
                href="#newArrivals"
                className=" py-3 px-5 text-lg hover:underline hover:text-xl duration-500"
              >
                Home
              </a>
            </div>
            <div className=" border border-t-0 border-b-0 border-l-0 border-r-black justify-center items-center flex">
              <a
                href=""
                className=" py-3 px-5 text-lg hover:underline hover:text-xl duration-500"
              >
                Home
              </a>
            </div>
            <div className=" border border-t-0 border-b-0 border-l-0 border-r-black justify-center items-center flex">
              <a
                href=""
                className=" py-3 px-5 text-lg hover:underline hover:text-xl duration-500"
              >
                Home
              </a>
            </div>
            <div className=" border border-t-0 border-b-0 border-l-0 border-r-black justify-center items-center flex">
              <a
                href=""
                className=" py-3 px-5 text-lg hover:underline hover:text-xl duration-500"
              >
                Home
              </a>
            </div>
            <div className="  justify-center items-center flex">
              <a
                href=""
                className=" py-3 px-5 text-lg hover:underline hover:text-xl duration-500"
              >
                Home
              </a>
            </div>
          </div>
          
          <div
            onClick={HandleCartDrawer}
            className=" relative active:scale-90 cursor-pointer flex justify-center items-center w-[50px] py-3 hover:scale-125 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            <span className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-2 rounded">
            {carts.length}
          </span>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
