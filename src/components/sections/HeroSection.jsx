"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0E1217] via-[#0c331160] to-[#0E1217] text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1
          className="font-bold font-caudex text-[30px] md:text-[60px] leading-[40px] md:leading-[70px] text-white tracking-[0.005em] text-center">
          Seize Early <br className="hidden md:block" />
          Opportunities In The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Metaverses
          </span>{" "}
          For <br className="hidden md:block" /> Business & Leisure
        </h1>

        {/* Subtext */}
        <p className="mt-4 font-poppins text-gray-400 text-sm md:text-lg leading-relaxed">
          You can shop your favorite products, join and organize cultural and
          sports events, sell your products in your own metaverse, and gain
          yield in an innovative growth market.
        </p>

        {/* Buttons */}
        <div className="mt-6 font-poppins flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/services"
            className="bg-themeColor text-black font-semibold px-6 py-3 rounded-full text-lg hover:scale-105 transition-transform"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="border border-gray-400 text-white font-semibold px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
