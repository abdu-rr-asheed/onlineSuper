import React from "react";
import logo from "../assets/logo2.svg";
import { categories, products } from "../utilities/data";

const Footer = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4 items-start content-start h-96">
        <div className="w-full order-2 lg:order-1">
          <FooterTitle title={"New Arrivels"} />
          <FooterUl>
            {categories.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </FooterUl>
        </div>
        <div className="w-full flex justify-center items-center flex-col md:px-10 px-3 order-1 lg:order-2">
          <img src={logo} alt="logo" className="w-6/12" />
          <div className="flex justify-center items-center border border-blue-900 rounded-lg w-full my-4">
            <input
              type="email"
              className="py-3 mx-2 focus-visible:outline-none w-full h-7 bg-transparent"
              placeholder="Email"
            />
            <div className="text-2xl bg-blue-900 px-4 py-1 m-1 text-white rounded-lg">
              Email
            </div>
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            quasi corrupti suscipit qui cumque nulla tempora esse at saepe
            similique.
          </p>
        </div>
        <div className="w-full order-3 lg:order-3">
          <FooterTitle title={"Category"} />
          <FooterUl>
            {products.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </FooterUl>
        </div>
      </div>
    </>
  );
};

const FooterTitle = ({ title }) => (
  <div className="relative text-center my-5 text-xl flex justify-center items-center">
    <div className="bg-white w-52 before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 md:before:w-8/12 before:w-11/12 before:h-4 before:border-4 before:border-transparent before:border-t-blue-800 before:border-b-green-600 before:-z-10">
      <h1 className="font-bold capitalize">{title}</h1>
    </div>
  </div>
);
const FooterUl = (props) => (
  <ul className="capitalize text-xl text-center">{props.children}</ul>
);

export default Footer;
