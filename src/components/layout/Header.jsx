"use client";
import { useState, useEffect, useRef } from "react";
import { contactButtonText, footerData, menuItems } from "@/utils/constants";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="relative bg-[#141B22] font-bakbak py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left Side: Logo */}
        <div>
          <div className="absolute left-0 top-0 h-full w-[40%] max-500:w-[50%] md:w-[23%] bg-themeColor rounded-br-full"></div>
          <div className="relative flex items-center gap-2">
            <Image src="/logo/Logo-black.svg" width={30} height={30} alt={footerData.companyName} />
            <span className="text-black font-semibold">{footerData.companyName}</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white uppercase text-md">
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

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            ref={menuRef} // Ref to detect outside clicks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 flex flex-col items-center space-y-4 py-4 text-white bg-[#141B22] uppercase text-sm z-10"
          >
            {menuItems.map((item, index) => (
              <li key={index} className="hover:text-themeColor cursor-pointer">
                {item.name}
              </li>
            ))}
            <button className="bg-themeColor text-black px-4 py-2 rounded-full hover:opacity-90">
              {contactButtonText}
            </button>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
