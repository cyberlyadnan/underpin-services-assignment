"use client";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const teamMembers = [
  {
    name: "Nikolaus Schauersberger",
    desc: "We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses.",
    role: "Founder / CEO",
    image: "/images/team1.png",
    positions:"md:bottom-20 md:left-40",
  },
  {
    name: "John Doe",
    desc: "We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses.",
    role: "CTO",
    image: "/images/team2.png",
    positions:"md:top-1/4 md:left-80",

  },
  {
    name: "Jane Smith",
    desc: "We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses.",
    role: "COO",
    image: "/images/team3.png",
    positions:"md:top-0 md:left-1/2 md:-translate-x-1/2",
  },
  {
    name: "Michael Brown",
    desc: "We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses.",
    role: "CFO",
    image: "/images/team4.png",
    positions:"md:top-1/4 md:right-80",
  },
  {
    name: "Alice Johnson",
    role: "CMO",
    image: "/images/team5.png",
    positions:"md:bottom-20 md:right-40",
  },
];

export default function TeamSection() {
  return (
    <section className="relative bg-custom-gradient text-white pt-16 px-4 text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/crystals.png"
          alt="Background Lines"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-[50%]">
        <Image
          src="/images/semi-circle.png"
          alt="Dotted Circle"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      <div>
        <h2 className="text-xl md:text-4xl font-caudex font-semibold mb-4">
          Team Members
        </h2>
        <p className="max-w-3xl font-poppins mx-auto mb-8">
          We provide a secure and efficient key management solution, ensuring
          convenient access and peace of mind for individuals and businesses.
          Simplify your key handling with our reliable key duplication, storage,
          and tracking services.
        </p>
      </div>

      <div className="relative h-[90vh] flex justify-center mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`absolute ${member.positions} transform`}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="shadow-lg"
            />
          </div>
        ))}

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center">
          <h3 className="text-[#24FF00] text-xl font-caudex font-semibold">
            {teamMembers[0].name}
          </h3>
          <p className="text-gray-300 mt-1 font-poppins">
            {teamMembers[0].role}
          </p>
          <p className="text-gray-300 mt-2 font-poppins">
            {teamMembers[0].desc}
          </p>

          <div className="flex justify-center mt-6 space-x-4">
            <button className="bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600">
              <FaArrowLeft />
            </button>
            <button className="bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}