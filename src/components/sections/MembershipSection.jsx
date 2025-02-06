"use client";
import Image from "next/image";
import Link from "next/link";

const MembershipSection = ({ cards, buttonText = "See Explained →" }) => {
  return (
    <section className="relative block w-full py-12 px-6 md:px-12 bg-custom-gradient text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/lines-bg.png" // Update with the correct path
          alt="Background Lines"
          layout="fill"
          objectFit="cover"
          className="opacity-25"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 w-full z-20 mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-[#162024] my-4 backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-lg border border-gray-700 transition hover:scale-105 relative w-full md:w-80`}
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
