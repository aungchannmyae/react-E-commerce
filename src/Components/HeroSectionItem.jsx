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
        <div className=" gap-8 grid grid-cols-6 h-[360px]">
          <div className=" shadow-lg rounded-lg flex items-center justify-center col-span-2 bg-white">
            <div className="">
              <img className=" w-[200px]" src={heroProduct.image} alt="" />
            </div>
          </div>

          <div className=" text-black p-3 flex flex-col items-start rounded-lg col-span-4 shadow-lg bg-slate-200">
            <h1 className=" my-5 text-3xl h-[60px] font-mono font-bold">
              {heroProduct.title}
            </h1>
            <div className=" h-[200px]">
              <p className=" text-xl font-semibold">
                {heroProduct.description}
              </p>
            </div>
            <div className=" mt-auto mb-3 px-5 w-full flex flex-row justify-between items-center">
              <div className=" flex flex-col gap-1">
                <span className=" text-lg">$ {heroProduct.price}</span>
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
