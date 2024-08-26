import React, { useContext, useState } from "react";
import Container from "./Container";
import useGeneralStore from "../store/GeneralStore";
import useCategoriesStore from "../store/CategoryStore";
import ProductsSectionPart from "./ProductsSectionPart";

const ProductsSection = ({}) => {
  const { productSection, activeProductSection } = useCategoriesStore();
  const { setProductsBox } = useGeneralStore();

  return (
    <div id="categories" className=" select-none my-5 mx-[150px] shadow-2xl bg-gradient-to-b from-slate-200 from-30% via-gray-300 via-90% to-gray-400 p-4 rounded-lg">
      <Container>
        <div className=" relative">
          <div className=" rounded-lg flex gap-4 w-full">
            {productSection.map((product)=>
              <ProductsSectionPart key={product.id} product={product}/>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsSection;
