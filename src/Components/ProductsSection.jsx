import React, { useContext, useState } from "react";
import Container from "./Container";
import { ProductContext } from "../Context/ProductsProvider";
import { GeneralContext } from "../Context/GeneralProvider";

const ProductsSection = ({ }) => {

  const {HandleCategoryProducts} = useContext(ProductContext);
  const {HandleProductsBox} = useContext(GeneralContext);

  const [FirstSpan, SetFirstSpan] = useState(true);
  const FirstSpanHandle = () => {
    SetFirstSpan(!FirstSpan);
    SetSecondSpan(false);
    SetThirdSpan(false);
    SetFourthSpan(false);
  };

  const [SecondSpan, SetSecondSpan] = useState(false);
  const SecondSpanHandle = () => {
    SetSecondSpan(!SecondSpan);
    SetFirstSpan(false);
    SetThirdSpan(false);
    SetFourthSpan(false);
  };

  const [ThirdSpan, SetThirdSpan] = useState(false);
  const ThirdSpanHandle = () => {
    SetThirdSpan(!ThirdSpan);
    SetSecondSpan(false);
    SetFirstSpan(false);
    SetFourthSpan(false);

    // console.log(Span);
  };

  const [FourthSpan, SetFourthSpan] = useState(false);
  const FourthSpanHandle = () => {
    SetFourthSpan(!FourthSpan);
    SetThirdSpan(false);
    SetSecondSpan(false);
    SetFirstSpan(false);
    // console.log(Span);
  };

  return (
    <div className=" my-2 mx-[150px] bg-slate-100 py-2 rounded-lg">
      <Container>
        <div className=" relative">
          <div className=" rounded-lg bg-slate-100 flex gap-[10px] w-full">
            <div
              onClick={FirstSpanHandle}
              className={` z-20 w-[200px] duration-700 bg-purple-400 h-[350px] rounded-lg ${
                FirstSpan &&
                " pointer-events-none duration-700 bg-red-400 w-[570px]"
              } `}
            >
              <button id="electronics" onClick={HandleProductsBox} className=" pointer-events-auto group overflow-hidden hover:bg-slate-600 active:scale-90 hover:text-white duration-200 flex flex-row gap-6 justify-center items-center border border-black py-2 pl-4 pr-6 rounded-full uppercase">
              electronics
            </button>
            </div>
            <div
              onClick={SecondSpanHandle}
              className={` z-20 w-[200px] duration-700 bg-red-400 h-[350px] rounded-lg ${
                SecondSpan &&
                " pointer-events-none duration-700 bg-red-400 w-[570px]"
              } `}
            ></div>
            <div
              onClick={ThirdSpanHandle}
              className={` z-20 w-[200px] duration-700 bg-orange-400 h-[350px] rounded-lg ${
                ThirdSpan &&
                " pointer-events-none duration-700 bg-red-400 w-[570px]"
              } `}
            ></div>
            <div
              onClick={FourthSpanHandle}
              className={` z-20 w-[200px] duration-700 bg-slate-400 h-[350px] rounded-lg ${
                FourthSpan && " duration-700 bg-red-400 w-[570px]"
              } `}
            ></div>
          </div>
          <div className=" opacity-0 hover:opacity-100 duration-500 bg-teal-400 h-full w-[360px] rounded-lg flex justify-center items-center z-10 absolute top-[0px] right-[0px]">
            <button id="electronics" onClick={HandleProductsBox} className=" group overflow-hidden hover:bg-slate-600 active:scale-90 hover:text-white duration-200 flex flex-row gap-6 justify-center items-center border border-black py-2 pl-4 pr-6 rounded-full uppercase">
              Shop More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 animate-ping group-hover:animate-none duration-500 group-active:translate-x-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsSection;
