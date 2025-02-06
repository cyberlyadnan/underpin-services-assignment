"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TeamSection({ teamMembers, title, desc }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    console.log("nexct")
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    console.log("prev")
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto switch every 5 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative bg-custom-gradient text-white pt-16 pb-20 px-4 text-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Image src="/images/crystals.png" alt="Background Lines" layout="fill" objectFit="cover" />
      </div>

      {/* Section Title */}
      <div>
        <h2 className="text-2xl md:text-4xl font-caudex font-semibold mb-4">{title}</h2>
        <p className="max-w-3xl font-poppins mx-auto mb-8 text-gray-300">{desc}</p>
      </div>

      {/* Team Member Carousel */}
      <div className="relative flex justify-center items-center h-[250px] md:h-[300px]">
        {teamMembers.map((member, index) => {
          const isActive = index === activeIndex;
          const isLeft = index === (activeIndex - 1 + teamMembers.length) % teamMembers.length;
          const isRight = index === (activeIndex + 1) % teamMembers.length;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${
                isActive
                  ? "w-[120px] md:w-[180px] z-10 scale-110"
                  : "w-[80px] md:w-[120px] opacity-40"
              } ${isLeft ? "left-1/3 -translate-x-1/2" : ""} ${isRight ? "right-1/3 translate-x-1/2" : ""}`}
            >
              <div className="absolute z-10 inset-0 bg-themeColor blur-xl opacity-20 rounded-full"></div>
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="z-20"
              />
            </div>
          );
        })}
      </div>

      {/* Active Member Details */}
      <div className="mt-3 z-50">
        <h3 className="text-themeColor text-xl font-caudex font-semibold">{teamMembers[activeIndex].name}</h3>
        <p className="text-gray-300 mt-1 font-poppins">{teamMembers[activeIndex].role}</p>
        <p className="text-gray-300 mt-2 font-poppins max-w-lg mx-auto">{teamMembers[activeIndex].desc}</p>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button onClick={prevSlide} className="bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600">
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} className="bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
