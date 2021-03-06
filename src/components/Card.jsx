import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Card = ({ name, image, weight, price, discountPrice, categoryId }) => {
  return (
    <>
      <div className="relative sm:w-[220px] h-fit bg-white rounded-lg sm:p-4 p-1 mx-4 xs:m-8 mb-10 drop-shadow-xl">
        {/* Category name */}
        <h2 className="text-gray-600 md:text-xl text-xs mb-2">{categoryId}</h2>
        {/* product Name */}
        <h1 className="relative w-10/12 md:text-2xl text-sm xs:text-xl bg-gradient-to-r from-blue-900 to-blue-600 text-center text-white font-bold py-1 sm:right-7 right-4 rounded-t-3xl rounded-br-3xl drop-shadow-md before:absolute before:-bottom-3 before:left-0 before:w-3 before:h-3 before:bg-gradient-to-l before:from-blue-600 before:to-blue-900 before:rounded-bl-3xl">
          {name}
        </h1>
        {/* percentage */}
        <p
          className="absolute right-4 -top-2 md:w-12 md:h-16 w-8 h-10 grid place-items-center bg-gradient-to-b from-red-900 to-red-600 md:text-xl text-xs text-white font-bold rounded-tl-xl"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 48% 80%, 0 100%, 0 0)",
          }}>
          11%
        </p>
        <span className="absolute -top-2 right-3 w-1 h-2 bg-gradient-to-l from-red-600 to-red-900 rounded-tr-xl"></span>
        <div className="relative w-full h-full my-2 border-2 border-blue-900 rounded-2xl overflow-hidden">
          {/* image */}
          <img src={image} alt="food" className="object-cover w-full h-full" />
          <p className="absolute top-0 right-0 sm:px-6 px-2 py-1 bg-blue-900 text-white font-bold rounded-bl-2xl">
            {weight}
          </p>
          <span className="absolute bottom-3 right-3 sm:w-10 sm:h-10 w-8 h-8 bg-blue-600 text-white sm:text-base text-sm font-bold grid place-items-center drop-shadow-md rounded-full">
            <FaShoppingCart />
          </span>
        </div>
        <div className="text-center">
          <h1 className="text-2xl text-blue-900 font-bold">
            Rs. {discountPrice}.00
          </h1>
          <s className="text-xl text-orange-600">Rs. {price}.00</s>
          <h1 className="text-xl">Save Rs. {price - discountPrice}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
