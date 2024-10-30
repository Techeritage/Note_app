import React from "react";
import Input from "./Input";
import SearchIcon from "../assets/search.svg";

const SearchBox = ({ value, onChange }) => {
  return (
    <section className="flex items-center gap-5 w-full">
      <Input
        value={value}
        onChange={onChange}
        iconLeft={SearchIcon}
        placeholder="search notes"
        className="pl-11 pr-3 font-medium"
      />
      {/* <button className="bg-blue-500 min-w-[100px] w-full text-3xl flex items-center justify-center text-white h-10 rounded-lg lg:h-11">
        <span className="mb-2">+</span>
      </button> */}
    </section>
  );
};

export default SearchBox;
