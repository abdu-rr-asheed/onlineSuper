import React from "react";
import logo from "../assets/logo.svg";
import { MdOutlineMenu } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { FaUserShield, FaShoppingCart } from "react-icons/fa";
import Search from "./Search";

const Header = () => {
  return (
    <div className="m-4">
      <div className="flex md:justify-start justify-around items-center lg:flex-nowrap flex-nowrap my-4">
        {/* Menu Icon */}
        <MdOutlineMenu fontSize={42} className="text-blue-900" />
        {/* LOGO */}
        <img src={logo} alt="logo" className="md:w-48 w-36 ml-5" />
        {/* Search bar */}
        <div className="ml-5 md:w-full flex md:flex-nowrap">
          <div className="md:flex justify-start items-center border border-blue-900 rounded md:w-full hidden">
            <Search />
          </div>
          <div className="flex justify-start items-center">
            <BsFillSunFill className="text-2xl text-blue-900 m-2" />
            <FaUserShield className="text-2xl text-blue-900 m-2" />
            <FaShoppingCart className="text-2xl text-blue-900 m-2" />
          </div>
        </div>
      </div>
      <div className="md:hidden justify-center items-center border border-blue-900 rounded md:w-full flex">
        <Search />
      </div>
    </div>
  );
};

export default Header;
