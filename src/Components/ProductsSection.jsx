import React, { useContext, useState } from "react";
import Container from "./Container";
import useGeneralStore from "../store/GeneralStore";
import useCategoriesStore from "../store/CategoryStore";
import ProductsSectionPart from "./ProductsSectionPart";

const ProductsSection = ({}) => {
  const { productSection, activeProductSection } = useCategoriesStore();
  const { setProductsBox } = useGeneralStore();

  return (
    <div id="categories" className=" max-md:hidden select-none my-5">
      <Container>
        <div className="bg-gradient-to-b from-slate-200 from-30% via-gray-300 via-90% to-gray-400 shadow-2xl md:p-4 rounded-xl relative">
          <div className=" rounded-lg flex md:gap-3 lg:gap-3 xl:gap-4 w-full">
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
