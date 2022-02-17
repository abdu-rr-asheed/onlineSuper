import {
  GiFruitBowl,
  GiFruitTree,
  GiSlicedBread,
  GiCannedFish,
  GiMeat,
} from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { FaCookieBite } from "react-icons/fa";

import kiwi from "../assets/kiwi.png";
import apple from "../assets/apple.png";
import cocacola from "../assets/cocacola.png";
import cabbage from "../assets/cabbage.png";
import beef from "../assets/beef.png";
import broccoli from "../assets/broccoli.png";
import greenchill from "../assets/greenchill.png";
import chicken from "../assets/chicken.png";
import biscuts from "../assets/biscuts.png";
import rice from "../assets/rice.png";

export const categories = [
  {
    id: 1,
    name: "fruits",
    icon: <GiFruitBowl />,
    dropdown: 1,
  },
  {
    id: 2,
    name: "Vegetables",
    icon: <GiFruitTree />,
    dropdown: 1,
  },
  {
    id: 3,
    name: "Beverages",
    icon: <BiDrink />,
    dropdown: 0,
  },
  {
    id: 4,
    name: "Bread",
    icon: <GiSlicedBread />,
    dropdown: 1,
  },
  {
    id: 5,
    name: "Canned",
    icon: <GiCannedFish />,
    dropdown: 0,
  },
  {
    id: 6,
    name: "Meat",
    icon: <GiMeat />,
    dropdown: 0,
  },
  {
    id: 7,
    name: "Cookies",
    icon: <FaCookieBite />,
    dropdown: 1,
  },
];

export const products = [
  {
    id: 1,
    name: "Kiwi",
    image: kiwi,
    weight: "100g",
    price: 130,
    discountPrice: 120,
    categoryId: categories[1].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 2,
    name: "Apple",
    image: apple,
    weight: "1pc",
    price: 50,
    discountPrice: 45,
    categoryId: categories[0].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 3,
    name: "Coca-Cola",
    image: cocacola,
    weight: "200ml",
    price: 80,
    discountPrice: 75,
    categoryId: categories[2].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 4,
    name: "Cabbage",
    image: cabbage,
    weight: "100g",
    price: 90,
    discountPrice: 90,
    categoryId: categories[1].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 5,
    name: "Beef",
    image: beef,
    weight: "1kg",
    price: 750,
    discountPrice: 720,
    categoryId: categories[5].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 6,
    name: "Broccoli",
    image: broccoli,
    weight: "250g",
    price: 150,
    discountPrice: 120,
    categoryId: categories[1].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 7,
    name: "Green Chill",
    image: greenchill,
    weight: "250g",
    price: 100,
    discountPrice: 95,
    categoryId: categories[1].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 8,
    name: "Chicken",
    image: chicken,
    weight: "1kg",
    price: 1300,
    discountPrice: 1200,
    categoryId: categories[5].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 9,
    name: "Biscuits",
    image: biscuts,
    weight: "180g",
    price: 200,
    discountPrice: 195,
    categoryId: categories[3].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
  {
    id: 10,
    name: "Rice",
    image: rice,
    weight: "1kg",
    price: 120,
    discountPrice: 115,
    categoryId: categories[1].name,
    recommend: 1,
    newProducts: 1,
    offers: 0,
  },
];
