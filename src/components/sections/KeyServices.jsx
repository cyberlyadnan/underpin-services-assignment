"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function KeyServices({ services, servicesDetails }) {
  return (
    <section className="relative bg-custom-gradient w-full py-16 px-6 md:px-16 text-white overflow-hidden flex flex-col md:flex-row items-center md:items-start">
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
      <div className="absolute left-0 bottom-0">
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
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 px-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-caudex font-bold">
            {servicesDetails.title}
          </h2>
          <p className="text-gray-300 font-poppins mt-4 max-w-2xl">
            {servicesDetails.description}
          </p>
          <motion.button
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 px-6 py-3 bg-themeColor font-poppins text-black font-bold rounded-full hover:bg-green-400 transition"
          >
            {servicesDetails.buttonText}
          </motion.button>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid gap-y-4 md:grid-cols-1 w-full md:w-1/2"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#D9D9D905] backdrop-blur-lg shadow-lg hover:scale-105 relative flex items-center gap-4 p-6 rounded-lg hover:border-green-500 transition"
            >
              <div className="bg-gray-700 p-3 rounded-full">{service.icon}</div>
              <div>
                <h3 className="text-lg font-caudex">{service.title}</h3>
                <p className="text-gray-400 mt-1 text-sm font-poppins">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
