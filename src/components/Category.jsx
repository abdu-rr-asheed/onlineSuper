import React from "react";

import { categories } from "../utilities/Category";

const Category = () => {
  return (
    <>
      {categories.map((item) => (
        <div key={item.id}>
          {item.name}
          {item.image}
        </div>
      ))}
    </>
  );
};

export default Category;
