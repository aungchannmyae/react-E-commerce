import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import React from "react";

const NewArrivalSection2 = ({
  newProduct: { id, title, image, description },
}) => {
  return (
    <div
      key={id}
      className=" rounded-xl group duration-300 hover:scale-105 shadow-lg bg-white w-[240px] col-span-1 border"
    >
      <div className=" flex flex-col justify-center m-1 p-4 border border-black/50 border-t-0 border-r-0 border-b-1 border-l-1">
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
  );
};

export default NewArrivalSection2;
