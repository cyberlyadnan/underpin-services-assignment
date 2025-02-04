import { services } from "@/utils/constants";
import Image from "next/image";



export default function KeyServices() {
  return (
    <section className="relative bg-gradient-to-b from-[#0E1217] via-[#0c331160] to-[#0E1217] w-full py-16 px-6 md:px-16 text-white overflow-hidden flex flex-col md:flex-row items-center md:items-start">
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-dotted-shapes.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute left-0 bottom-0 ">
        <Image
          src="/images/thread.svg"
          alt="Decorative Lines"
          width={500}
          height={500}
          quality={100}
        />
      </div>

      {/* Content and Cards */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto w-full gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 px-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-caudex font-bold">Our Key Services</h2>
          <p className="text-gray-300 font-poppins mt-4 max-w-2xl">
            We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses. Simplify your key handling with our reliable key duplication, storage, and tracking services.
          </p>
          <button className="mt-6 px-6 py-3 bg-themeColor font-poppins text-black font-bold rounded-full hover:bg-green-400 transition">
            Explore Services
          </button>
        </div>

        {/* Right Cards */}
        <div className="grid gap-y-4 md:grid-cols-1 w-full md:w-1/2">
          {services.map((service, index) => (
            <div
              key={index}
              className=" bg-[#D9D9D905] backdrop-blur-lg shadow-lg hover:scale-105  relative flex items-center gap-4 p-6  rounded-lg  hover:border-green-500 transition"
            >
              <div className="bg-gray-700 p-3 rounded-full">{service.icon}</div>
              <div>
                <h3 className="text-lg font-caudex">{service.title}</h3>
                <p className="text-gray-400 mt-1 text-sm font-poppins">{service.description}</p>
              </div>
              {index === 2 && (
                <div className="absolute inset-0 border-2 border-themeColor rounded-lg animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
