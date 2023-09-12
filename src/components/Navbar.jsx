import React, { useState } from "react";
import logo from "../assets/logo/tv.png";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  const [navBg, setNavBg] = useState();
  const changeNavbg = () => {
    if (window.scrollY >= 450) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener("scroll", changeNavbg);
  return (
    <div className="fixed top-0 left-0 w-full" style={{ zIndex: 100 }}>
      <header
        className={
          navBg
            ? "bg-gray-600 transition-all duration-100 ease-in px-[95px] py-[22px] flex items-center justify-between h-[80px] w-full"
            : "bg-transparent px-[95px] py-[22px] flex items-center justify-between w-full h-[80px]"
        }

        // bg-gradient-to-b from-[#00000000] to-[#00000083]
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

            // onChange={}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <AiOutlineSearch className="h-5 w-5 text-white" />
          </div>
        </div>
      </header>

      <div className="h-[60vh] w-full bg-gray-50"></div>
    </div>
  );
}
