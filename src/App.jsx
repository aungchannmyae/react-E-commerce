import { useState } from "react";
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
import products from "./Data/products";

function App() {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];



  const [boxProducts, SetBoxProducts] = useState(products);

  const HandleCategoryProducts = (event) => {
    const currentCategoryProduct = event.target.innerText;
    
      const New = products.filter((product) => product.category === currentCategoryProduct || currentCategoryProduct === 'All')
      SetBoxProducts(New);

    // console.dir(currentCategoryProduct);
  };

  // const HandleSearchToProductBox = () => {
  //   HandleProductsBox();
  //   HandleCategoryProducts();
  // }

  const [cartDrawer, SetCartDrawer] = useState(false);
  const HandleCartDrawer = () => {
    SetCartDrawer(!cartDrawer);
    console.log(cartDrawer);
  };

  const [productsBox, SetProductsBox] = useState(false);
  const HandleProductsBox = () => {
    SetProductsBox(!productsBox);

  };

  const [productsItemBox, SetProductsItemBox] = useState(false);
  const HandleProductsItemBox = () => {
    SetProductsItemBox(!productsItemBox);
    console.log(productsItemBox);
  };

  return (
    <main className={` overflow-x-hidden`}>
      <header className=" select-none w-full flex">
        <h1 className=" pointer-events-none mx-auto my-5 text-3xl text-black font-bold font-serif">
          E-Commerce
        </h1>
      </header>
      <NavBar
        productsBox={productsBox}
        HandleProductsBox={HandleProductsBox}
        cartDrawer={cartDrawer}
        HandleCartDrawer={HandleCartDrawer}
        HandleCategoryProducts={HandleCategoryProducts}
      ></NavBar>
      <Hero></Hero>
      <NewArrivals
        categories={categories}
        HandleProductsBox={HandleProductsBox}
        HandleProductsItemBox={HandleProductsItemBox}
      ></NewArrivals>
      <FavoriteSection
        productsItemBox={productsItemBox}
        HandleProductsItemBox={HandleProductsItemBox}
      ></FavoriteSection>
      <ProductsSection
        categories={categories}
        HandleProductsBox={HandleProductsBox}
        HandleCategoryProducts={HandleCategoryProducts}
      ></ProductsSection>
      <ProductsBox
        productsBox={productsBox}
        HandleProductsBox={HandleProductsBox}
        categories={categories}
        HandleCategoryProducts={HandleCategoryProducts}
        boxProducts={boxProducts}
        HandleProductsItemBox={HandleProductsItemBox}
      ></ProductsBox>
      <CartDrawer
        cartDrawer={cartDrawer}
        HandleCartDrawer={HandleCartDrawer}
      ></CartDrawer>
      <ProductsItemBox
        categories={categories}
        productsItemBox={productsItemBox}
        HandleProductsItemBox={HandleProductsItemBox}
      ></ProductsItemBox>
    </main>
  );
}

export default App;
