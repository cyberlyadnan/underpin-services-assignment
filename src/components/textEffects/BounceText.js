import { motion } from "framer-motion";

export const BounceText = ({text}) => {
  return (
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.2,
      }}
    >
      {text}
    </motion.h1>
  );
};
