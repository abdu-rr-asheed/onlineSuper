import React from "react";
import Category from "../components/Category";
import DeliveryMap from "../components/DeliveryMap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import Offers from "../components/Offers";
import Cards from "./Cards";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <Category />
        <HeroSlider />
      </div>
      <Cards />
      <Cards />
      <Offers />
      <DeliveryMap />
      <Footer />
    </>
  );
};

export default Home;
