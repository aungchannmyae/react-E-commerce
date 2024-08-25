import React, { useContext } from "react";
import Container from "./Container";
import { Button, Carousel } from "flowbite-react";
import useProductsStore from "../store/ProductStore";
import useGeneralStore from "../store/GeneralStore";
import { HiShoppingCart } from "react-icons/hi";

const FavoriteSection = ({}) => {
  const HeroProducts = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 3,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 250 },
    },
  ];

  const { productsItemBox, setProductsItemBox } = useGeneralStore();
  const { filterItemBoxProducts } = useProductsStore();
  const handleItemBoxProducts = () => {
    setProductsItemBox();
    filterItemBoxProducts(id);
  };

  return (
    <div className="border border-t-black border-r-0 border-b-black border-l-0 py-5 mx-auto w-[1400px] h-[520px]">
      <div className=" -mb-10">
        <Container>
          <h1 className=" flex flex-row items-end text-lg underline underline-offset-4">
            Our Favorite Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </h1>
          <p className=" text-lg">Handpicked for You – Explore our best-selling items</p>
        </Container>
      </div>
      <Carousel
        leftControl
        rightControl
        slideInterval={2000}
        pauseOnHover
        indicators=""
      >
        {HeroProducts.map((heroProduct) => (
          <div className=" rounded-xl cursor-default flex justify-center items-center mx-auto">
            <Container>
              <div className=" gap-8 grid grid-cols-6 h-[360px]">
                <div className=" shadow-lg rounded-lg flex items-center justify-center col-span-2 bg-white">
                  <div className="">
                    <img
                      className=" w-[200px]"
                      src={heroProduct.image}
                      alt=""
                    />
                  </div>
                </div>

                <div className=" text-black p-3 flex flex-col items-start rounded-lg col-span-4 shadow-lg bg-slate-200">
                  <h1 className=" my-5 text-3xl h-[60px] font-mono font-bold">
                    {heroProduct.title}
                  </h1>
                  <div className=" h-[200px]">
                    <p className=" text-xl font-semibold">
                      {heroProduct.description}
                    </p>
                  </div>
                  <div className=" mt-auto mb-3 px-5 w-full flex flex-row justify-between items-center">
                    <div className=" flex flex-col gap-1">
                      <span className=" text-lg">$ {heroProduct.price}</span>
                      <span>stars</span>
                    </div>
                    <button className=" px-3 py-2 rounded-md text-black hover-1 flex items-end justify-center gap-2">
                      {" "}
                      <HiShoppingCart className=" h-5 w-5" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FavoriteSection;
