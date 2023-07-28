import React, { useState } from "react";

import { motion } from "framer-motion";
import { transition1 } from "../transitions.js";

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition1}
      exit={{ opacity: 0 }}
      className="section pt-32 h-screen overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
        className="h1 text-6xl text-center"
      >
        Portfolio
      </motion.h1>
      <iframe
        title="pic-time integration"
        frameborder="0"
        id="pictimeintegration"
        src="https://rbmphotobooth.pic-time.com/client?headless=true"
        className="w-full h-full"
      ></iframe>
    </motion.section>
  );
};

export default Portfolio;
