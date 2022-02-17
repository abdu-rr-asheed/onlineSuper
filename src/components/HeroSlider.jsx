import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import banner from "../assets/banner.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const HeroSlider = () => {
  return (
    <div className="m-4 rounded-xl overflow-hidden">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}>
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
            first_title="Abdur Rasheed"
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
    <div className="absolute w-full h-full flex flex-col justify-center md:pl-20 pl-10 bg-gradient-to-r from-black to-[#00000000] top-0 left-0 text-white lg:text-8xl md:text-4xl text-3xl font-bold">
      <h1 className="font-normal">{first_title}</h1>
      <h1>{second_title}</h1>
      <h2>
        {percentage}% <span className="md:text-5xl text-red-600">OFF</span>
      </h2>
    </div>
  </div>
);

export default HeroSlider;
