import { motion as Motion } from "framer-motion";
import React from "react";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.25, // delay antar child
      delayChildren: 0.2, // delay sebelum animasi pertama dimulai
    },
  },
  exit: {
    opacity: 0,
  },
};

const childVariants = {
  initial: { opacity: 0, y: 200 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0, y: 50 },
};

const PageWrapper = ({ children }) => {
  return (
    <Motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute w-full mt-16 md:mt-24 lg:mt-30 xl:mt-24 2xl:mt-26"
    >
      {/* Wrap setiap child dengan motion.div + variants */}
      {React.Children.map(children, (child, index) => (
        <Motion.div variants={childVariants} key={index}>
          {child}
        </Motion.div>
      ))}
    </Motion.div>
  );
};

export default PageWrapper;
