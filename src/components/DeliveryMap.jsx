import React from "react";
import storesvg from "../assets/storesvg.svg";
import drngsvg from "../assets/drngsvg.svg";
import deiverhome from "../assets/deiverhome.svg";

const DeliveryMap = () => {
  return (
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
  <div className="flex justify-center items-center my-3 sm:w-auto w-full">
    <div className="w-3 h-3 text-blue-900 font-black rounded-full m-5">
      {number}
    </div>
    <div className="w-40 sm:w-full">
      <div className="text-2xl font-bold">{first_title}</div>
      <div>{second_title}</div>
    </div>
    <img src={image} alt="svg" />
  </div>
);

export default DeliveryMap;
