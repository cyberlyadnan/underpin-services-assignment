"use client";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";


const MembershipSection = ({cards,buttonText="See Explained →"}) => {
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
      <div className="relative flex flex-col w-[100%] md:w-[100%] xl:w-[80%] 2xl:w-[70%] min-h-[70vh] h-auto md:h-[80vh] z-20 mx-auto">
        {cards.map((card, index) => (
          <Tilt
          key={index}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.05}
          className={`bg-[#162024] my-4 backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-lg border border-gray-700 transition hover:scale-105 
            relative md:absolute ${card.position} w-full md:w-80`}
        >
          {/* <div> */}
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
          {/* </div> */}
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default MembershipSection;
