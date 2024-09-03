import React from "react";
import useProductsStore from "../store/ProductStore";

const CartDrawerItems = ({ cart }) => {
  const { addCartQuantity, subCartQuantity, deleteCartItem, carts } =
    useProductsStore();
  const handleDeletedItems = () => {
    deleteCartItem(cart.product.id);
  };
  return (
    <div
      key={cart.id}
      className="  group mx-4 my-3 px-2 py-3 flex flex-row items-center justify-between relative"
    >
      <div className=" h-[70px] flex items-center justify-center shadow-xl rounded">
        <img className=" px-1 w-[60px]" src={cart.product.image} alt="" />
      </div>

      <div className=" flex justify-between items-center">
        <p className=" flex">
          <button
            onClick={() => {
              subCartQuantity(cart.product.id);
            }}
            className="active:scale-75 duration-300 hover:bg-gray-300 rounded flex items-center justify-center w-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span className=" px-1 inline-block">{cart.quantity}</span>
          <button
            onClick={() => {
              addCartQuantity(cart.product.id);
            }}
            className="active:scale-75 duration-300 hover:bg-gray-300 rounded flex items-center justify-center w-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </p>
      </div>
      <span>
        <p className=" ">$ {cart.cost.toFixed(2)}</p>
      </span>
      <button
        onClick={handleDeletedItems}
        className=" rounded opacity-0 group-hover:opacity-100 duration-200 bg-red-700 text-white"
      >
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartDrawerItems;
