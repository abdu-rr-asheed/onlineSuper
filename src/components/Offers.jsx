import React from "react";
import image from "../assets/a.png";
import image1 from "../assets/a1.jpg";
import image2 from "../assets/a2.png";
import image3 from "../assets/a3.png";
import image4 from "../assets/a4.png";
import image5 from "../assets/a5.png";
import image6 from "../assets/a6.png";

const Offers = () => {
  return (
    <>
      <div className="grid sm:grid-cols-5 gap-4 w-full p-5">
        <div className="bg-blue-900 row-span-2 col-span-2">
          <img
            src={image1}
            alt="poster"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-blue-900">
          <img
            src={image}
            alt="poster"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-blue-900">
          <img
            src={image2}
            alt="poster"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-blue-900">
          <img
            src={image3}
            alt="poster"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-blue-900">
          <img
            src={image4}
            alt="poster"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-blue-900">
          <img
            src={image5}
            alt="poster"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-blue-900">
          <img
            src={image6}
            alt="poster"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Offers;
