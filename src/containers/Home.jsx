import React from "react";
import Navbar from "../components/Navbar";
import DeliveryMap from "../components/DeliveryMap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import Offers from "../components/Offers";
import Cards from "./Cards";

const Home = () => {
  return (
    <div className="flex flex-col max-w-[1356px] w-full">
      <Header />
      <div className="xl:block hidden">
        <Navbar />
      </div>
      <HeroSlider />
      <Cards main_heading={"New Arrivals"} slug_title={"Excuses"} />
      <Cards main_heading={"New Products"} slug_title={"Top items"} />
      <Offers />
      <DeliveryMap />
      <Footer />
    </div>
  );
};

export default Home;
