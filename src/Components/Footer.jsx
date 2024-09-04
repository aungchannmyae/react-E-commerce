import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div
      id="aboutUs"
      className=" text-white w-full bg-black p-5 py-10 rounded-lg"
    >
      <Container className="">
        <div className=" grid grid-cols-5 lg:gap-4 xl:gap-5 selection:bg-red-600">
          <div className=" col-span-1">
            <h1 className=" text-lg mb-2">About Us</h1>
            <ul className=" text-xs p-[1px] *:my-1">
              <li>
                "Our Story – Committed to Quality and Customer Satisfaction"
              </li>
              <li>
                "Founded in 2024, E-commerce was born out of a passion for
                delivering top-quality products at affordable prices. Our
                mission is to provide a seamless shopping experience, backed by
                exceptional customer service."
              </li>
            </ul>
          </div>
          <div className=" col-span-1">
            <h1 className=" text-lg">Customer services</h1>
            <ul className=" text-xs p-[1px] *:my-1">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Order Tracking</li>
              <li>Returns & Exchanges</li>
              <li>Shipping Information</li>
            </ul>
          </div>
          <div className=" col-span-1">
            <h1 className=" text-lg">Policies</h1>
            <ul className=" text-xs p-[1px] *:my-1">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className=" col-span-1">
            <h1 className=" text-lg">Social Media</h1>
            <ul className=" text-xs p-[1px] *:my-1">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Pinterest</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className=" col-span-1">
            <h1 className=" text-lg">Payment Methods</h1>
            <ul className=" text-xs p-[1px] *:my-1">
              <li>Visa</li>
              <li>MasterCard</li>
              <li>American Express</li>
              <li>PayPal</li>
              <li>Apple Pay</li>
              <li>Google Pay</li>
            </ul>
          </div>
          <div className=" col-span-5 flex flex-col items-center justify-center">
            <h1>E-Commerce</h1>
            <p>
              Delivering quality products and exceptional service since 2024.
            </p>
            <p>
              © {new Date().getFullYear()}{" "}
              <a
                className=" underline hover:cursor-pointer hover:text-red-600"
                href="https://aungchanmyaepersonalportfolio.netlify.app"
              >
                aungchanmyae
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
