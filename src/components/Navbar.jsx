import React from "react";

import { BiChevronDown } from "react-icons/bi";
import { categories } from "../utilities/data";

const Navbar = () => {
  return (
    <div className="sm:relative flex justify-center items-center flex-wrap lg:m-6 m-4">
      {categories.map((item) => (
        <div
          className="sm:static relative group flex justify-center items-center flex-col xl:w-fit xl:mx-1 w-full"
          key={item.id}>
          <div className="relative mx-1 xl:my-1 my-3  rounded-3xl w-full h-11 flex justify- items-center text-blue-900 md:text-xl text-base  py-1 pr-2 border-blue-900 border">
            <span className="text-3xl  w-11 h-11 grid place-items-center rounded-full border border-blue-900 bg-blue-900 text-white">
              {item.icon}
            </span>
            <span className="ml-2 text-center">{item.name}</span>
            <span
              className={`ml-2 ${
                item.dropdown == 0 ? "opacity-0" : "opacity-100"
              }`}>
              <BiChevronDown />
            </span>
          </div>
          {item.dropdown == 1 && (
            <div className="hidden group-hover:block xl:absolute top-full left-0 right-0 ml-auto mr-auto bg-white z-20 xl:w-11/12 w-full mt-3 rounded-md">
              <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-4 px-6 py-3">
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
          )}
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
