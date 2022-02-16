import React from "react";

const Heading = ({ main_heading, slug_title }) => {
  return (
    <>
      {main_heading && (
        <div className="relative text-center my-5 md:text-4xl text-3xl flex justify-center items-center">
          <div className="bg-gray-100 md:w-72 w-52 before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 md:before:w-8/12 before:w-11/12 before:h-10 before:border-4 before:border-transparent before:border-t-blue-800 before:border-b-green-600 before:-z-10">
            <h1 className="font-bold capitalize">{main_heading}</h1>
            <h3 className="uppercase text-2xl">{slug_title}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Heading;
