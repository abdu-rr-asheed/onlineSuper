import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import banner from "../assets/banner.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const HeroSlider = () => {
  return (
    <div className="m-5 rounded-xl overflow-hidden">
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <Banner
            image={banner}
            first_title="Every Wednesday"
            second_title="Today Offer"
            percentage="13"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image={banner}
            first_title="Every Wednesday2"
            second_title="Today Offer2"
            percentage="23"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const Banner = ({ image, first_title, second_title, percentage }) => (
  <div className="relative w-full">
    <img src={image} alt="banner" className="object-cover w-full" />
    <div className="absolute w-full h-full flex flex-col justify-center md:pl-20 pl-10 bg-gradient-to-r from-black to-[#00000000] top-0 left-0 text-white md:text-8xl text-3xl font-bold">
      <h1 className="font-normal">{first_title}</h1>
      <h1>{second_title}</h1>
      <h2>
        {percentage}% <sup className="md:text-5xl -ml-5 text-red-600">OFF</sup>
      </h2>
    </div>
  </div>
);

export default HeroSlider;
