import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./Components/NavBar";
import NewArrivals from "./Components/NewArrivals";
import FavoriteSection from "./Components/HeroSection";
import Hero from "./Components/Hero";
import ProductsSection from "./Components/ProductsSection";
import ProductsBox from "./Components/ProductsBox";
import CartDrawer from "./Components/CartDrawer";
import ProductsItemBox from "./Components/ProductsItemBox";
import ProductsProvider, { ProductContext } from "./Context/ProductsProvider";
import CartsProvider from "./Context/CartsProvider";
import CategoriesProvider from "./Context/CategoriesProvider";
import GeneralProvider from "./Context/GeneralProvider";

function App() {
  // const HandleSearchToProductBox = () => {
  //   HandleProductsBox();
  //   HandleCategoryProducts();
  // }

  // const [cartDrawer, SetCartDrawer] = useState(false);
  // const HandleCartDrawer = () => {
  //   SetCartDrawer(!cartDrawer);
  //   console.log(cartDrawer);
  // };

  // const [productsBox, SetProductsBox] = useState(false);
  // const HandleProductsBox = () => {
  //   SetProductsBox(!productsBox);
  // };

  // const [productsItemBox, SetProductsItemBox] = useState(false);
  // const HandleProductsItemBox = () => {
  //   SetProductsItemBox(!productsItemBox);
  //   console.log(productsItemBox);
  // };

  return (
    <ProductsProvider>
      <CartsProvider>
        <CategoriesProvider>
          <GeneralProvider>
            <main className={` overflow-x-hidden`}>
              <header className=" select-none w-full flex">
                <h1 className=" pointer-events-none mx-auto my-5 text-3xl text-black font-bold font-serif">
                  E-Commerce
                </h1>
              </header>
              <NavBar></NavBar>
              <Hero></Hero>
              <NewArrivals></NewArrivals>
              <FavoriteSection></FavoriteSection>
              <ProductsSection></ProductsSection>
              <ProductsBox></ProductsBox>
              <CartDrawer
              ></CartDrawer>
              <ProductsItemBox></ProductsItemBox>
            </main>
          </GeneralProvider>
        </CategoriesProvider>
      </CartsProvider>
    </ProductsProvider>
  );
}

export default App;
