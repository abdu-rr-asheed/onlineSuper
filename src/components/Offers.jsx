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
          <OfferImage image={image1} />
        </div>
        <div className="bg-blue-900">
          <OfferImage image={image} />
        </div>
        <div className="bg-blue-900">
          <OfferImage image={image2} />
        </div>
        <div className="bg-blue-900">
          <OfferImage image={image3} />
        </div>
        <div className="bg-blue-900">
          <OfferImage image={image4} />
        </div>
        <div className="bg-blue-900">
          <OfferImage image={image5} />
        </div>
        <div className="bg-blue-900">
          <OfferImage image={image6} />
        </div>
      </div>
    </>
  );
};

const OfferImage = ({ image }) => (
  <img src={image} alt="poster" className="object-cover w-full h-full" />
);

export default Offers;
