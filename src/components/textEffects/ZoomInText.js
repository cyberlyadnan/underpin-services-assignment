import { motion } from "framer-motion";

export const ZoomInText = ({text}) => {
  return (
    <motion.h1
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
    >
      {text}
    </motion.h1>
  );
};
