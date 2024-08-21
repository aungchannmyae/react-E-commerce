import NavBar from "./NavBar";
import NewArrivals from "./NewArrivals";
import FavoriteSection from "./HeroSection";
import Hero from "./Hero";
import ProductsSection from "./ProductsSection";
import ProductsBox from "./ProductsBox";
import CartDrawer from "./CartDrawer";
import ProductsItemBox from "./ProductsItemBox";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useProductsStore from "../store/ProductStore";

const MainLayout = () => {
  return (
    <>
      <main className={` overflow-x-hidden`}>
        <header className=" select-none w-full flex">
          <Link
            to={`/`}
            className=" pointer-events-none mx-auto my-5 text-3xl text-black font-bold font-serif"
          >
            E-Commerce
          </Link>
        </header>
        <NavBar></NavBar>
        <Hero></Hero>
        <NewArrivals></NewArrivals>
        <FavoriteSection></FavoriteSection>
        <ProductsSection></ProductsSection>
        <ProductsBox></ProductsBox>
        <CartDrawer></CartDrawer>
        <ProductsItemBox></ProductsItemBox>
      </main>
    </>
  );
};

export default MainLayout;
