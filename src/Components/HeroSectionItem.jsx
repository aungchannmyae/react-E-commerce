import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import useProductsStore from "../store/ProductStore";
import Container from "./Container";
import Rating from "./Rating";

const HeroSectionItem = ({ heroProduct }) => {
  const { carts, setCart } = useProductsStore();
  // const [inCart, setInCart] = useState(false);
  const handleCartProducts = () => {
    setCart(heroProduct, heroProduct.price);
    // const productInCart = carts.map((cart)=> cart.product.id === heroProduct.id);
    // setInCart(productInCart);
  };
  return (
    <div className=" rounded-xl cursor-default flex justify-center items-center mx-auto">
      <Container>
        <div className="relative max-md:gap-2 md:gap-8 grid max-md:grid-rows-6 md:grid-cols-6 max-md:h max-md:h-[440px] md:h-[360px]">
          <div className=" shadow-lg rounded-lg flex items-center justify-center max-md:hidden md:col-span-2 bg-white">
            <div className="">
              <img className=" w-[200px]" src={heroProduct.image} alt=""/>
            </div>
          </div>

          <div className=" text-black p-3 md:flex md:flex-col md:items-start rounded-lg max-md:row-span-6 md:col-span-4 shadow-lg bg-slate-200">
            <div className=" shadow-lg rounded-lg mr-3 h-[180px] bg-white flex items-center justify-center float-left md:hidden">
              <img className=" w-[100px]" src={heroProduct.image} alt="" />
            </div>
            <h1 className=" max-md:line-clamp-3 max-md:h-[180px] md:my-5 max-md:text-2xl md:text-3xl h-[60px] font-mono font-bold">
              {heroProduct.title}
            </h1>
            <div className=" max-md:h-[160px] max-md:my-2 overflow-scroll scrollbar-hide">
              <p className=" text-xl text-pretty indent-8 font-semibold">
                {heroProduct.description}
              </p>
            </div>
            <div className=" mt-auto mb-3 max-md:px-1 md:px-2 w-full flex flex-row justify-between items-center">
              <div className=" flex flex-col gap-1">
                <span className=" text-lg text-red-600 font-semibold">$ {heroProduct.price}</span>
                <Rating rate={heroProduct.rating.rate} />
              </div>
              {carts.find((cart) => cart.product.id === heroProduct.id) ? (
                <button
                  disabled={true}
                  onClick={handleCartProducts}
                  className=" disabled:after:content-['Added'] disabled:pointer-events-none after:content-['Add_to_Cart'] disabled:bg-red-600 px-3 py-2 rounded-md text-black hover-1 flex items-end justify-center gap-2"
                >
                  {" "}
                  <HiShoppingCart className=" h-5 w-5" />
                </button>
              ) : (
                <button
                  disabled={false}
                  onClick={handleCartProducts}
                  className=" disabled:after:content-['Added'] disabled:pointer-events-none after:content-['Add_to_Cart'] disabled:bg-red-600 px-3 py-2 rounded-md text-black hover-1 flex items-end justify-center gap-2"
                >
                  {" "}
                  <HiShoppingCart className=" h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSectionItem;
