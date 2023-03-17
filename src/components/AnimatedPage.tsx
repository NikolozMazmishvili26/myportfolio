import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      stiffness: 45,
      duration: 0.4,
    },
  },
  exit: { opacity: 0, x: -100 },
};

function AnimatedPage({ children }: any) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;
