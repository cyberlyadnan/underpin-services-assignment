"use client"
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const teamMembers = [
  {
    name: "Nikolaus Schauersberger",
    role: "Founder / CEO",
    image: "/images/ceo.png", // Update with actual image paths
  },
  {
    name: "John Doe",
    role: "CTO",
    image: "/images/cto.png",
  },
  {
    name: "Jane Smith",
    role: "COO",
    image: "/images/coo.png",
  },
  {
    name: "Michael Brown",
    role: "CFO",
    image: "/images/cfo.png",
  },
  {
    name: "Alice Johnson",
    role: "CMO",
    image: "/images/cmo.png",
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0E1217] via-[#111827] to-[#0E1217] text-white py-16 px-4 text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/crystals.png" // Update with the correct path
          alt="Background Lines"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-[50%] bottom-1/3 inset-0">
        <Image
          src="/images/semi-circle.png" // Update with the correct path
          alt="Background Lines"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <h2 className="text-3xl font-semibold mb-4">Team Members</h2>
      <p className="max-w-2xl mx-auto mb-8">
        We provide a secure and efficient key management solution, ensuring
        convenient access and peace of mind for individuals and businesses.
        Simplify your key handling with our reliable key duplication, storage,
        and tracking services.
      </p>

      
    </section>
  );
}
