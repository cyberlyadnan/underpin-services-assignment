"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const cards = [
  {
    title: "Become an Investor",
    description:
      "This feature is not available to everyone, but you can access it by requesting us.",
    link: "#",
    list: [],
    position: "top-10 left-10", // Adjusted for correct placement
  },
  {
    title: "Become a Club Member",
    description: "Product Blackrose Club Shopowner costs 18,000€ net and includes:",
    link: "#",
    list: [
      "10 seminars on mindset, crypto, metaverse, and NFT",
      "1 workshop on job opportunities in the Metaverse",
      "Permission to enter the virtual Blackrose Club World",
    ],
    position: "top-1/2 left-1/3 -translate-x-1/2",
  },
  {
    title: "Become a Shop Owner",
    description: "Product Blackrose Club Shopowner costs 18,000€ net and includes:",
    link: "#",
    list: [
      "All benefits of the Blackrose Club Member package",
      "Run your own virtual shop in the Blackrose Club World",
      "Get 20% of the profits you generate in your virtual shop",
      "Eligible for profit distribution from advertising and member pool",
    ],
    position: "top-0 right-10",
  },
];

const MembershipSection = ({ buttonText = "See Explained →" }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // md breakpoint in Tailwind (768px)
    };

    checkScreenSize(); // Run once on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="relative block w-full py-12 px-6 md:px-12 bg-custom-gradient text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/lines-bg.png"
          alt="Background Lines"
          layout="fill"
          objectFit="cover"
          className="opacity-25"
        />
      </div>

      {/* Cards Container */}
      <div
        className={`relative mx-auto  ${
          isMobile ? "flex flex-col items-center justify-center" : "h-[80vh] w-[100%] md:w-[100%] xl:w-[80%] 2xl:w-[70%] min-h-[70vh] md:h-[80vh] z-20 mx-auto"
        }`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-[#162024] my-4 backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-lg border border-gray-700 transition hover:scale-105 
            w-full md:w-80 ${!isMobile ? `absolute ${card.position}` : ""}`}
          >
            <h3 className="text-xl w-[70%] font-bold font-orbitron">{card.title}</h3>
            <p className="text-gray-400 mt-2 font-poppins">{card.description}</p>

            {card.list?.length > 0 && (
              <ul className="mt-3 font-poppins text-gray-400 text-sm space-y-1">
                {card.list.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            )}

            <Link
              href={card.link}
              className="inline-block mt-4 text-green-400 font-medium hover:underline"
            >
              {buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipSection;
