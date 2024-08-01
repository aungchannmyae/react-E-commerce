import React, { createContext, useContext, useState } from 'react'
import { ProductContext } from './ProductsProvider';

export const CartContext = createContext();

const CartsProvider = ({children}) => {
    const {products} = useContext(ProductContext)
    const [carts ,setCarts] = useState([
            {
              id: 1,
              product: products[1],
              quantity: 0,
              cost: 0,
            },
            {
              id: 2,
              product: products[10],
              quantity: 0,
              cost: 0,
            },
          ]);

  return (
    <CartContext.Provider value={{carts}} >{children}</CartContext.Provider>
  )
}

export default CartsProvider