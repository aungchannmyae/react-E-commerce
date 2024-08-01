
import NavBar from "./NavBar";
import NewArrivals from "./NewArrivals";
import FavoriteSection from "./HeroSection";
import Hero from "./Hero";
import ProductsSection from "./ProductsSection";
import ProductsBox from "./ProductsBox";
import CartDrawer from "./CartDrawer";
import ProductsItemBox from "./ProductsItemBox";
import ProductsProvider, { ProductContext } from "../Context/ProductsProvider";
import CartsProvider from "../Context/CartsProvider";
import CategoriesProvider from "../Context/CategoriesProvider";
import GeneralProvider from "../Context/GeneralProvider";
import React from "react";
import { Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <ProductsProvider>
        <CartsProvider>
          <CategoriesProvider>
            <GeneralProvider>
              <main className={` overflow-x-hidden`}>
                <header className=" select-none w-full flex">
                  <Link to={`/`} className=" pointer-events-none mx-auto my-5 text-3xl text-black font-bold font-serif">
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
            </GeneralProvider>
          </CategoriesProvider>
        </CartsProvider>
      </ProductsProvider>
    </>
  );
};

export default MainLayout;
