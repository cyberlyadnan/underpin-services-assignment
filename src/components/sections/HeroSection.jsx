"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = ({heroData}) => {
  return (
    <section className="relative flex justify-center items-center w-full bg-custom-gradient h-[70vh] text-white py-20 px-6 md:px-12">
      <motion.div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="font-bold font-caudex text-[30px] md:text-[60px] leading-[40px] md:leading-[70px] text-white tracking-[0.005em] text-center">
          {heroData.heading.split("-")[0]}{" "}
          <br className="hidden md:block" />
          {heroData.heading.split("-")[1]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-themeColor">
            {heroData.heading.split("-")[2]}{" "}
          </span>{" "}
          {heroData.heading.split("-")[3]} <br className="hidden md:block" />{heroData.heading.split("-")[4]} {" "}
        </h1>

        {/* Subtext */}
        <p className="mt-4 font-poppins text-gray-400 text-sm md:text-lg leading-relaxed">
          {heroData.subtext}
        </p>

        {/* Buttons */}
        <div className="mt-6 font-poppins flex flex-col md:flex-row justify-center items-center gap-4">
          {heroData.buttonLinks.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={`${button.style} font-semibold px-6 py-3 rounded-full text-lg hover:scale-105 transition-transform`}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
