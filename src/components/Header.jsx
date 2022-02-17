import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { MdOutlineMenu } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaUserShield, FaShoppingCart } from "react-icons/fa";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <>
        <div className="flex md:justify-start justify-around items-center lg:flex-nowrap flex-nowrap my-4">
          {/* Menu Icon */}
          {toggle ? (
            <CgClose
              fontSize={42}
              className="text-blue-900"
              onClick={() => setToggle(false)}
            />
          ) : (
            <MdOutlineMenu
              fontSize={42}
              className="text-blue-900 xl:hidden"
              onClick={() => setToggle(true)}
            />
          )}
          {/* LOGO */}
          <img src={logo} alt="logo" className="md:w-48 w-36 ml-5" />
          {/* Search bar */}
          <div className="ml-5 md:w-full flex md:flex-nowrap">
            <div className="md:flex justify-center items-center border border-blue-900 rounded-2xl md:w-full hidden">
              <Search />
            </div>
            <div className="flex justify-start items-center">
              <BsFillSunFill className="text-2xl text-blue-900 m-2" />
              <FaUserShield className="text-2xl text-blue-900 m-2" />
              <FaShoppingCart className="text-2xl text-blue-900 m-2" />
            </div>
          </div>
        </div>
        <div className="md:hidden justify-center items-center border border-blue-900 rounded-2xl md:w-full flex mx-4">
          <Search />
        </div>
      </>
      {/* Close Toggle */}
      {toggle && (
        <div className="fixed top-0 w-full bg-white h-full overflow-y-auto shadow-md z-10 animate-slide-in">
          <div className="w-full flex justify-end items-center p-2">
            <CgClose
              fontSize={42}
              className="text-blue-900"
              onClick={() => setToggle(false)}
            />
          </div>
          <Navbar />
        </div>
      )}
    </>
  );
};

export default Header;
