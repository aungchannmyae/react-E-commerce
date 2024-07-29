import React from "react";
import Container from "./Container";
import { Button, Carousel } from "flowbite-react";

const FavoriteSection = ({productsItemBox, HandleProductsItemBox}) => {
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

  return (
    <Container>
      <div className="border border-t-black border-r-0 border-b-black border-l-0  my-1 h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel
          leftControl={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          }
          rightControl={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          }
          slideInterval={2000}
          pauseOnHover
          indicators=""
        >
          <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
            <div className=" flex justify-around items-center">
              <div className=" w-[500px]">
                <p>Our favorite Items</p>
                <h1>{HeroProducts[0].title}</h1>
                <p>{HeroProducts[0].description}</p>
                <Button onClick={HandleProductsItemBox}>Shop Now</Button>
              </div>
              <div className=" w-[500px] flex items-center justify-center">
                <img
                  className=" w-[200px]"
                  src={HeroProducts[0].image}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
            <div className=" flex justify-around items-center">
              <div className=" w-[500px] flex items-center justify-center">
                <img
                  className=" w-[200px]"
                  src={HeroProducts[1].image}
                  alt=""
                />
              </div>
              <div className=" w-[500px]">
                <p>Our favorite Items</p>
                <h1>{HeroProducts[1].title}</h1>
                <p>{HeroProducts[1].description}</p>
                <Button onClick={HandleProductsItemBox}>Shop Now</Button>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
            <div className=" flex justify-around items-center">
              <div className=" w-[500px]">
                <p>Our favorite Items</p>
                <h1>{HeroProducts[2].title}</h1>
                <p>{HeroProducts[2].description}</p>
                <Button onClick={HandleProductsItemBox}>Shop Now</Button>
              </div>
              <div className=" w-[500px] flex items-center justify-center">
                <img
                  className=" w-[200px]"
                  src={HeroProducts[2].image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </Container>
  );
};

export default FavoriteSection;
