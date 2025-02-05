import { motion } from "framer-motion";

export const TypewriterText = ({text}) => {
  return (
    <motion.h1
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{
        duration: 3,
        delay: 0.5,
        ease: "steps(30)", // Defines the typing effect
      }}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderRight: "4px solid #fff", // Optional cursor effect
      }}
    >
      {text}
    </motion.h1>
  );
};
