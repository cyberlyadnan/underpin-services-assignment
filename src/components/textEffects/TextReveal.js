import { motion } from "framer-motion";

export const TextReveal = ({text}) => {
  return (
    <motion.h1
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 2, ease: "easeInOut" }}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "inline-block",
        borderRight: "4px solid #fff", // Optional cursor effect
      }}
    >
      {text}
    </motion.h1>
  );
};
