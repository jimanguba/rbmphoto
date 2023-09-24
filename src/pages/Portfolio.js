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
      <p className="text-lg md:text-xl text-center px-4 md:px-0">
        Please check out our{" "}
        <a
          href="https://www.facebook.com/photographyrbm/"
          target="_blank"
          className="underline text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
        >
          Facebook page{" "}
        </a>
        for more!
      </p>
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
