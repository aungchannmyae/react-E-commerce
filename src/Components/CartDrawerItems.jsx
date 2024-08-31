import React from "react";
import useProductsStore from "../store/ProductStore";

const CartDrawerItems = ({ cart }) => {
  const { addCartQuantity, subCartQuantity, deleteCartItem } =
    useProductsStore();
    const handleDeletedItems = () => {
        deleteCartItem(cart.product.id)
        console.log(cart.id);
        console.log(cart.product.id);
    }
  return (
    <div
      key={cart.id}
      className=" group mx-4 my-6 p-2 flex flex-col rounded-md border border-black relative"
    >
      <img
        className=" absolute -top-6 left-6 w-[50px]"
        src={cart.product.image}
        alt=""
      />
      <p className=" absolute left-0 bottom-0">$ {cart.cost.toFixed(2)}</p>
      <button onClick={handleDeletedItems} className=" rounded-tr-md absolute top-0 right-0 opacity-0 group-hover:opacity-100 duration-200 bg-red-700 text-white">
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
      <p className=" mt-12"></p>
      <div className=" flex justify-between items-center">
        <p></p>
        <p className=" flex">
          <button
            onClick={() => {
              addCartQuantity(cart.product.id);
            }}
            className="active:scale-75 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300 bg-gray-300 rounded flex items-center justify-center w-6"
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
          <span className=" px-1 inline-block">{cart.quantity}</span>
          <button
            onClick={() => {
              subCartQuantity(cart.product.id);
            }}
            className="active:scale-75 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 duration-300 bg-gray-300 rounded flex items-center justify-center w-6"
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
        </p>
      </div>
    </div>
  );
};

export default CartDrawerItems;
