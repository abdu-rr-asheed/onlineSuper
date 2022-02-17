import React from "react";
import logo from "../assets/logo2.svg";
import { ImSearch } from "react-icons/im";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 place-items-center h-96">
      <div className="w-10/12 grid place-items-center mx-2">
        <img src={logo} alt="logo" className="w-6/12" />
        <div className="flex justify-center items-center border border-blue-900 rounded-lg w-full my-4">
          <input
            type="email"
            className="py-3 mx-2 focus-visible:outline-none w-full h-7 bg-transparent"
            placeholder="Email"
          />
          <div className="text-2xl bg-blue-900 px-4 py-1 m-1 text-white rounded-lg">
            Email
          </div>
        </div>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quasi
          corrupti suscipit qui cumque nulla tempora esse at saepe similique.
        </p>
      </div>
      <div className="w-full">
        <div className="relative text-center my-5 text-xl flex justify-center items-center">
          <div className="bg-white w-52 before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 md:before:w-8/12 before:w-11/12 before:h-4 before:border-4 before:border-transparent before:border-t-blue-800 before:border-b-green-600 before:-z-10">
            <h1 className="font-bold capitalize">New Arrivels</h1>
          </div>
        </div>
        <ul className="text-center">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
      </div>
      <div className="w-full">
        <div className="relative text-center my-5 text-xl flex justify-center items-center">
          <div className="bg-white w-52 before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 md:before:w-8/12 before:w-11/12 before:h-4 before:border-4 before:border-transparent before:border-t-blue-800 before:border-b-green-600 before:-z-10">
            <h1 className="font-bold capitalize">New Arrivels</h1>
          </div>
        </div>
        <ul className="text-center">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
