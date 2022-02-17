import React from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";

import { products } from "../utilities/data";

const Cards = ({ main_heading, slug_title }) => {
  return (
    <>
      <Heading main_heading={main_heading} slug_title={slug_title} />
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xs:grid-cols-1 place-items-center">
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
