import React from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";

import { products } from "../utilities/data";

const Cards = ({ main_heading, slug_title }) => {
  return (
    <>
      <Heading main_heading={main_heading} slug_title={slug_title} />
      <div className="flex justify-around items-center flex-wrap">
        {products.map((item, idx) => (
          <React.Fragment key={idx}>
            {item.recommend == 1 && (
              <Card
                name={item.name}
                image={item.image}
                weight={item.weight}
                price={item.price}
                discountPrice={item.discountPrice}
                categoryId={item.categoryId}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Cards;
