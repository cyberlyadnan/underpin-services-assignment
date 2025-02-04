"use client";
import { contactButtonText, footerData, menuItems } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative bg-[#141B22] font-themeFont py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left Side: Logo */}
        <div>
          <div className="absolute left-0 top-0 h-full w-[40%] max-500:w-[50%] md:w-[26%] bg-themeColor rounded-br-full"></div>
          <div className="relative flex items-center gap-2 px-4">
            <Image src="/logo/Logo-black.svg" width={30} height={30} alt={footerData.companyName} />
            <span className="text-black font-semibold">{footerData.companyName}</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white uppercase text-sm">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-themeColor cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>

        {/* Right Side: Button */}
        <div className="hidden md:block">
          <button className="bg-themeColor text-black px-4 py-2 rounded-full hover:opacity-90">
            {contactButtonText}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute top-full left-0 right-0 flex flex-col items-center space-y-4 py-4 text-white bg-[#0D0D0D] uppercase text-sm z-10">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-themeColor cursor-pointer">
              {item.name}
            </li>
          ))}
          <button className="bg-themeColor text-black px-4 py-2 rounded-full hover:opacity-90">
            {contactButtonText}
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Header;
