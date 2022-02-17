import React from "react";
import storesvg from "../assets/storesvg.svg";
import drngsvg from "../assets/drngsvg.svg";
import deiverhome from "../assets/deiverhome.svg";

const DeliveryMap = () => {
  return (
    // <div className="relative flex justify-between items-center flex-wrap mx-3 my-9 before:absolute before:top-1/2 sm:before:left-1/2 before:0 before:transform before:-translate-x-1/2 before:-translate-y-1/2 sm:before:w-10/12 sm:before:h-[1px] before:w-[1px] before:h-10/12 before:border-4 before:border-blue-800 before:-z-10 before:border-dashed">
    <div className="relative flex lg:justify-around justify-center items-center flex-wrap mx-3 my-9">
      <OrderSystem
        image={storesvg}
        first_title="1-hour Slots"
        second_title="9 am - 6 pm"
        number="1."
      />
      <OrderSystem
        image={drngsvg}
        first_title="7 days"
        second_title="a week"
        number="2."
      />
      <OrderSystem
        image={deiverhome}
        first_title="Front door"
        second_title="to your hand"
        number="3."
      />
    </div>
  );
};

const OrderSystem = ({ image, number, first_title, second_title }) => (
  <div className="flex justify-center items-center drop-shadow-2xl">
    <div className="w-3 h-3 text-blue-900 font-black rounded-full m-5">
      {number}
    </div>
    <div className="w-40">
      <div className="text-2xl font-bold">{first_title}</div>
      <div>{second_title}</div>
    </div>
    <img src={image} alt="svg" />
  </div>
);

export default DeliveryMap;
