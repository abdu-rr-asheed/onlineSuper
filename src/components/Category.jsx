import React from "react";

import { BiChevronDown } from "react-icons/bi";
import { categories } from "../utilities/data";

const Category = () => {
  return (
    <div className="flex justify-around items-center lg:flex-nowrap flex-wrap overflow-y-hidden md:order-1 order-2">
      {categories.map((item) => (
        <div key={item.id} className="relative m-2">
          <div className="rounded-2xl md:w-full w-44 h-8 bg-cover flex justify-start items-center text-blue-900 md:text-xl text-base  py-1 pr-2 before:absolute before:top-0 before:left-0 before:w-full before:h-full border-blue-900 border before:z-[1] overflow-visible z-[2]">
            <span className="text-3xl  w-11 h-11 grid place-items-center rounded-full border border-blue-900 bg-blue-900 text-white">
              {item.icon}
            </span>
            <span className="ml-2 text-center md:w-fit w-8/12">
              {item.name}
            </span>
            <span className="ml-2 md:block hidden">
              <BiChevronDown />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
