import React, { createContext, useState } from "react";

export const GeneralContext = createContext();
const GeneralProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const HandleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
    //   console.log(cartDrawer);
  };

  const [productsBox, setProductsBox] = useState(false);
  const HandleProductsBox = () => {
    setProductsBox(!productsBox);
  };

  const [productsItemBox, setProductsItemBox] = useState(false);
  const HandleProductsItemBox = () => {
    setProductsItemBox(!productsItemBox);
    //   console.log(productsItemBox);
  };

  return (
    <GeneralContext.Provider
      value={{
        cartDrawer,
        productsBox,
        productsItemBox,
        HandleCartDrawer,
        HandleProductsBox,
        HandleProductsItemBox,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
