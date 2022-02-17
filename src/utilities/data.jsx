import {
  GiFruitBowl,
  GiFruitTree,
  GiSlicedBread,
  GiCannedFish,
  GiMeat,
} from "react-icons/gi";
import { BiDrink } from "react-icons/bi";

import food3 from "../assets/food3.png";

export const categories = [
  {
    id: 1,
    name: "fruits",
    icon: <GiFruitBowl />,
    image:
      "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    id: 2,
    name: "Vegetables",
    icon: <GiFruitTree />,
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    name: "Beverages",
    icon: <BiDrink />,
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 4,
    name: "Bread",
    icon: <GiSlicedBread />,
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 5,
    name: "Canned",
    icon: <GiCannedFish />,
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 6,
    name: "Meat",
    icon: <GiMeat />,
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

export const products = [
  {
    id: 1,
    name: "kiwi",
    image: food3,
    weight: "100g",
    price: 1300,
    discountPrice: 1200,
    categoryId: categories[0].name,
    recommend: 0,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 2,
    name: "kiwi2",
    image: food3,
    weight: "100g",
    price: 1300,
    discountPrice: 1200,
    categoryId: categories[1].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 3,
    name: "kiwi3",
    image: food3,
    weight: "100g",
    price: 1300,
    discountPrice: 1200,
    categoryId: categories[2].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 4,
    name: "Kiwi4",
    image: food3,
    weight: "100g",
    price: 1300,
    discountPrice: 1200,
    categoryId: categories[3].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 5,
    name: "kiwi5",
    image: food3,
    weight: "100g",
    price: 1300,
    discountPrice: 1200,
    categoryId: categories[4].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 6,
    name: "kiwi5",
    image: food3,
    weight: "100g",
    price: 1300,
    discountPrice: 1200,
    categoryId: categories[4].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
];
