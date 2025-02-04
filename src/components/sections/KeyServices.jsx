import Image from "next/image";
import { FaUser, FaLayerGroup } from "react-icons/fa";
import { MdWork, MdPeople } from "react-icons/md";

const services = [
  {
    title: "Individualisation",
    icon: <FaUser className="text-xl text-white" />,
    description:
      "Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure. Be Among The Pioneers.",
  },
  {
    title: "User Created Content",
    icon: <FaLayerGroup className="text-xl text-white" />,
    description:
      "Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure. Be Among The Pioneers.",
  },
  {
    title: "Income Opportunities",
    icon: <MdWork className="text-xl text-white" />,
    description:
      "Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure. Be Among The Pioneers.",
  },
  {
    title: "Social Media",
    icon: <MdPeople className="text-xl text-white" />,
    description:
      "Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure. Be Among The Pioneers.",
  },
];

export default function KeyServices() {
  return (
    <section className="relative bg-gradient-to-b from-[#0E1217] via-[#111827] to-[#0E1217] w-full py-16 px-6 md:px-16 text-white overflow-hidden flex flex-col md:flex-row items-center md:items-start">
      {/* Background Images */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-dotted-shapes.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute left-0 bottom-0 -z-10">
        <Image
          src="/images/thread.svg"
          alt="Decorative Lines"
          width={400}
          height={400}
          quality={100}
        />
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black -z-10" /> */}

      {/* Content and Cards */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto w-full gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 px-12 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl font-heading font-bold">Our Key Services</h2>
          <p className="text-gray-300 font-special mt-4 max-w-2xl">
            We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses. Simplify your key handling with our reliable key duplication, storage, and tracking services.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition">
            Explore Services
          </button>
        </div>

        {/* Right Cards */}
        <div className="grid gap-y-4 md:grid-cols-1 w-full md:w-1/2">
          {services.map((service, index) => (
            <div
              key={index}
              className=" bg-[#162024] backdrop-blur-lg shadow-lg hover:scale-105  relative flex items-center gap-4 p-6  rounded-lg border border-gray-700 hover:border-green-500 transition"
            >
              <div className="bg-gray-700 p-3 rounded-full">{service.icon}</div>
              <div>
                <h3 className="text-lg">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
              {index === 2 && (
                <div className="absolute inset-0 border-2 border-green-500 rounded-lg animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
