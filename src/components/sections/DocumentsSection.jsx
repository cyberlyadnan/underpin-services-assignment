"use client"
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

export default function DocumentsSection({ documents, title, desc }) {
  return (
    <section className="px-[15%] mx-auto bg-custom-gradient text-white py-12 pb-20">
      <div className="text-center py-10">
        <h2 className="text-3xl font-orbitron font-bold text-white md:text-5xl">
          Documents:{" "}
          <span className="text-themeColor">{title}</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-3xl font-poppins mx-auto">
          {desc}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {documents.map((doc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }} // Animation stagger
          >
            <Tilt
              options={{
                max: 25, // Adjusted to make tilt effect more subtle
                scale: 1,
                speed: 450,
              }}
              className="bg-[#D9D9D905] backdrop-blur-lg rounded-xl shadow-lg transition hover:scale-105 overflow-hidden"
            >
              <motion.div
                className="relative w-full h-40"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={doc.image}
                  alt={doc.title}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
              <div className="p-4">
                <motion.h3
                  className="text-md font-semibold font-orbitron"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {doc.title}
                </motion.h3>
                <motion.p
                  className="text-gray-400 text-sm mt-2 font-poppins"
                  whileHover={{ color: "#5BFF6D" }} // Hover effect for the description text
                  transition={{ duration: 0.2 }}
                >
                  {doc.description}
                </motion.p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
