import React from "react";
import logo from "../assets/logo/tv.png";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  return (
    <header
      className="bg-transparent px-[95px] py-[22px] flex items-center justify-between w-full h-[80px] fixed top-0 left-0"
      style={{ zIndex: 100 }} // Add the z-index here
    >
      <div className="flex gap-6 items-center">
        <img src={logo} alt="Moviebox-logo" className="w-[50px] h-[50px]" />
        <p className="font-bold text-white text-2xl">MovieBox</p>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="What do you want to watch..."
          className="w-[550px] py-1.5 px-4 rounded-md border-2 bg-transparent border-gray-300 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-50 placeholder:text-white text-white"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <AiOutlineSearch className="h-5 w-5 text-white" />
        </div>
      </div>
    </header>
  );
}
