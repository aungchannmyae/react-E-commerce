import React, { useContext, useState } from "react";
import Container from "./Container";
import useGeneralStore from "../store/GeneralStore";
import useCategoriesStore from "../store/CategoryStore";
import ProductsSectionPart from "./ProductsSectionPart";

const ProductsSection = ({}) => {
  const { productSection, activeProductSection } = useCategoriesStore();
  const { setProductsBox } = useGeneralStore();

  return (
    <div className=" my-2 mx-[150px] bg-slate-100 py-2 rounded-lg">
      <Container>
        <div className=" relative">
          <div className=" rounded-lg bg-slate-100 flex gap-[10px] w-full">
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
