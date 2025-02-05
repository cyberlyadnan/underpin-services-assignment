import { documents } from "@/utils/constants";
import Image from "next/image";


export default function DocumentsSection() {
  return (
    <section className="px-[15%] mx-auto bg-custom-gradient text-white py-12 pb-20">
      <div className="text-center py-10">
        <h2 className="text-3xl font-orbitron font-bold text-white md:text-5xl">
          Documents: <span className="text-themeColor">Whitepaper & Pitch Deck</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-3xl font-poppins mx-auto">
        Blackrose Club targets the most active and technology savvy target group in the DACH region and will later expand to serve the global market.Blackrose Club targets the most active and technology savvy target group in the DACH region and will later expand to serve the global market.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {documents.map((doc, index) => (
          <div key={index} className="bg-[#D9D9D905] backdrop-blur-lg rounded-xl shadow-lg transition hover:scale-105  overflow-hidden">
            <div className="relative w-full h-40">
              <Image src={doc.image} alt={doc.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h3 className="text-md font-semibold font-orbitron">{doc.title}</h3>
              <p className="text-gray-400 text-sm mt-2 font-poppins">{doc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
