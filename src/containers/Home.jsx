import React from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
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
    </>
  );
};

export default Home;
