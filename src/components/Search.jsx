import React from "react";
import { ImSearch } from "react-icons/im";

const Search = () => {
  return (
    <>
      <ImSearch className="text-2xl text-blue-900 m-2" />
      <input
        type="search"
        className="py-3 mx-2 focus-visible:outline-none w-full"
        placeholder="Search Product..."
      />
    </>
  );
};

export default Search;
