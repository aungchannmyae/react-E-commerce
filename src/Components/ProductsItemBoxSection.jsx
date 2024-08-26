import React from 'react'
import { HiShoppingCart } from "react-icons/hi";
import useProductsStore from '../store/ProductStore';

const ProductsItemBoxSection = ({itemBoxProduct}) => {
    const {setCart} = useProductsStore();
    const handleCartProducts = () => {
        setCart(itemBoxProduct, itemBoxProduct.price);
    }
  return (
    <div className=" overflow-hidden grid grid-cols-3 gap-3 bg-white rounded-lg h-full ">
            <div className=" overflow-hidden col-span-2 flex gap-2 p-3">
              <div className=" w-1/2 bg pt-10 flex flex-col items-center gap-5 ">
                <img className=" w-3/5 " src={itemBoxProduct.image} alt="" />
                <div className=" w-full flex flex-col justify-start gap-2">
                  <h1 className=" text-xl font-mono">Sale Price</h1>
                  <p className=" text-red-600 font-bold text-[50px]">
                    $ {itemBoxProduct.price}
                  </p>
                </div>
              </div>
              <div className=" w-1/2 pt-10 h-full">
                <h1 className=" flex justify-center mb-5 items-center text-lg font-semibold text-center ">
                  {itemBoxProduct.title}
                </h1>
                <p className=" h-[200px] overflow-y-scroll text-center mb-5 text-pretty text-sm scrollbar-hide">
                  {itemBoxProduct.description}
                </p>
                <div onClick={handleCartProducts} className=" select-none cursor-pointer flex flex-row items-center justify-center font-semibold hover-2 active:scale-105 duration-100 bg-red-600 gap-2 py-2 px-3 rounded-lg">
                  <HiShoppingCart className=" h-5 w-5" />
                  Add To Cart
                </div>
              </div>
            </div>
            <div className=" col-span-1 flex flex-col bg-slate-200 my-3 mr-3 p-2 rounded-lg shadow-xl overflow-hidden">
              <div className=" flex items-center justify-between">
                <p className=" text-sm">Ratings and Reviews</p>
                <span className=" cursor-pointer font-medium">Overview</span>
              </div>
              <div className=" h-[100px] ">
                <h1 className=" text-[40px]">{itemBoxProduct.rating.rate}</h1>
                <span>stars</span>
              </div>
              <div>
                <div className=" bg-slate-300 p-1 rounded overflow-hidden mx-1">
                  <h1 className=" text-lg text-nowrap">
                    Alexandre Volkanoviski
                  </h1>
                  <span>stars</span>
                  <p className=" line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, impedit.
                  </p>
                  <p className=" mt-2 text-xs">Was this review helpful?</p>
                </div>
              </div>
              <div className=" mt-auto">
                <h1 className=" text-lg font-semibold ">Rate this product</h1>
                <p className=" text-xs">Tell others what you think</p>
                <span>stars</span>
                <div className=" ">
                  <p className="cursor-pointer font-medium text-red-600 duration-200 active:bg-slate-400 inline-block py-1 px-1 rounded-full -ml-1">Write a review</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ProductsItemBoxSection