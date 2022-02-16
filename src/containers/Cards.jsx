import React from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";

const Cards = () => {
  return (
    <>
      <Heading main_heading="New Arrivals" slug_title="Exclusive" />
      <div className="flex justify-around items-center flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Cards;
