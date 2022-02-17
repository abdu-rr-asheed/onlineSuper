import React from "react";

import { BiChevronDown } from "react-icons/bi";
import { categories } from "../utilities/data";

const Navbar = () => {
  return (
    <div className="sm:relative flex justify-around items-center lg:flex-nowrap flex-wrap md:order-1 order-2">
      {categories.map((item) => (
        <div
          className="sm:static relative group transition sm:w-fit w-full flex justify-around items-center flex-col"
          key={item.id}>
          {/* Category List */}
          <div className="relative m-2">
            <div className="rounded-2xl sm:w-full w-60 h-8 bg-cover flex justify-start items-center text-blue-900 md:text-xl text-base  py-1 pr-2 before:absolute before:top-0 before:left-0 before:w-full before:h-full border-blue-900 border before:z-[1] overflow-visible z-[2]">
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
          {/* Drop down */}
          <div className="hidden sm:group-hover:block sm:absolute top-full left-0 bg-white z-10 w-full mt-3">
            <div className="grid sm:grid-cols-4 gap-4 px-6 py-3">
              <CategoryCard>
                <HeadingH1 title={"Leafy Green"} />
                <SubCategory
                  image={
                    "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                  }
                  title={"Lettuce"}
                  subTitle={"more"}
                />
                <SubCategory
                  image={
                    "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                  }
                  title={"Lettuce"}
                  subTitle={"more"}
                />
                <SubCategory
                  image={
                    "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                  }
                  title={"Lettuce"}
                  subTitle={"more"}
                />
              </CategoryCard>
              <CategoryCard>
                <HeadingH1 title={"Cruciferous"} />
                <SubCategory
                  image={
                    "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                  }
                  title={"Lettuce"}
                  subTitle={"more"}
                />
              </CategoryCard>
              <CategoryCard>
                <HeadingH1 title={"Leafy Green"} />
                <SubCategory
                  image={
                    "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                  }
                  title={"Lettuce"}
                  subTitle={"more"}
                />
                <SubCategory
                  image={
                    "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                  }
                  title={"Lettuce"}
                  subTitle={"more"}
                />
              </CategoryCard>
              <CategoryCard>
                <HeadingH1 title={"Root"} />
                <SubCategory
                  image={
                    "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                  }
                  title={"Lettuce"}
                  subTitle={"more"}
                />
                <SubCategory
                  image={
                    "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                  }
                  title={"Lettuce"}
                  subTitle={"more"}
                />
                <SubCategory
                  image={
                    "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                  }
                  title={"Lettuce"}
                  subTitle={"more"}
                />
              </CategoryCard>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CategoryCard = (props) => <div className="">{props.children}</div>;
const SubCategory = ({ image, title, subTitle }) => (
  <div className="flex justify-start items-center my-5">
    <img
      src={image}
      alt="SubImage"
      className="object-cover w-14 h-14 rounded-full"
    />
    <div className="ml-5">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-base">{subTitle}</p>
    </div>
  </div>
);
const HeadingH1 = ({ title }) => (
  <h1 className="font-bold text-2xl pb-2 border-double border-2 border-transparent border-b-blue-800">
    {title}
  </h1>
);

export default Navbar;
