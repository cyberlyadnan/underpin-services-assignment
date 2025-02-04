import Image from "next/image";

const documents = [
  {
    title: "White Paper EN",
    description: "In the Blackrose Club ecosystem, the virtual and physical worlds come together.",
    image: "/images/vr-user.png", // Replace with actual image paths
  },
  {
    title: "White Paper DE",
    description: "In the Blackrose Club ecosystem, the virtual and physical worlds come together.",
    image: "/images/vr-user.png", // Replace with actual image paths
  },
  {
    title: "Pitchdeck EN",
    description: "In the Blackrose Club ecosystem, the virtual and physical worlds come together.",
    image: "/images/vr-user.png", // Replace with actual image paths
  },
  {
    title: "Pitchdeck DE",
    description: "In the Blackrose Club ecosystem, the virtual and physical worlds come together.",
    image: "/images/vr-user.png", // Replace with actual image paths
  },
];

export default function DocumentsSection() {
  return (
    <section className="px-[15%] mx-auto bg-gradient-to-b from-[#0E1217] via-[#111827] to-[#0E1217] text-white py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Documents: <span className="text-green-400">Whitepaper & Pitch Deck</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Blackrose Club Targets The Most Active And Technology Savvy Target Group In The DACH
          Region And Will Later Expand To Serve The Global Market.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {documents.map((doc, index) => (
          <div key={index} className="bg-[#162024] backdrop-blur-lg bg-white/10 rounded-xl shadow-lg border border-gray-700 transition hover:scale-105  overflow-hidden">
            <div className="relative w-full h-40">
              <Image src={doc.image} alt={doc.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{doc.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{doc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
