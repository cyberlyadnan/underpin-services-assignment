import { motion } from "framer-motion";

export const StaggeredFadeInText = ({text,text2}) => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={textVariants}>
      <motion.h1 variants={textVariants}>Explore the Metaverse</motion.h1>
      <motion.p variants={textVariants}>A new world of opportunities awaits.</motion.p>
    </motion.div>
  );
};
