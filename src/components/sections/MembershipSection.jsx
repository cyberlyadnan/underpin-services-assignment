    "use client";

    import { cards } from "@/utils/constants";
    import Image from "next/image";
    import Link from "next/link";

    const MembershipSection = () => {
    return (
        <section className="relative block md:flex space-x-4 justify-center min-h-[70vh] w-full py-20 px-6 md:px-12 bg-[#0E1217] text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
            <Image
            src="/images/lines-bg.png" // Update with the correct path
            alt="Background Lines"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            />
        </div>
        {/* Content Wrapper */}
        {/* <div className="relative w-[80%] h-[70vh] z-20 bg-red-600 mx-auto"> */}
            {cards.map((card, index) => (
            <div
                key={index}
                className={`bg-[#162024] my-4 backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-lg border border-gray-700 transition hover:scale-105 
                        block ${card.position} md:w-80 w-full`}
            >
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-gray-400 mt-2">{card.description}</p>
                
                {/* ✅ Fix: Use 'card.list' instead of 'cards.list' */}
                {card.list?.length > 0 && (
                <ul className="mt-3 text-gray-400 text-sm space-y-2">
                    {card.list.map((item, i) => (
                    <li key={i}>• {item}</li>
                    ))}
                </ul>
                )}

                <Link
                href={card.link}
                className="inline-block mt-4 text-green-400 font-medium hover:underline"
                >
                See Explained →
                </Link>
            </div>
            ))}
        {/* </div> */}
        </section>
    );
    };

    export default MembershipSection;
