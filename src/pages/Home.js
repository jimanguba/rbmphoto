import { Link } from "react-router-dom";
import HomeImg from "../img/home/home.png";

import { motion } from "framer-motion";
import { transition1 } from "../transitions.js";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section pt-32"
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* image */}
          <div className="flex justify-center max-h-96 lg:max-h-max lg:w-1/2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:-left-40 overflow-hidden"
            >
              <img src={HomeImg} alt="RBM Photo Booth in Winnipeg" />
            </motion.div>
          </div>
          {/* text */}
          <div className="w-full mt-8 px-4 lg:w-1/2 lg:pl-16 pr-4 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transition1}
              className="h1 lg:text-8xl"
            >
              RBM <br /> Photo Booth
            </motion.h1>
            <p className="text-[20px] lg:text-[26px] font-primary mb-4 lg:mb-12">
              Winnipeg, MB
            </p>
            <p className="text-[16px] lg:text-[20px] font-primary mb-4 lg:mb-12">
              Elevate Your Event with RBM Photo Booth!
            </p>
            <p className="text-[16px] lg:text-[20px] font-primary mb-4 lg:mb-12">
              Discover affordable photo booth rentals in Winnipeg, perfect for
              weddings and events throughout Manitoba. Our cutting-edge
              technology, fun props, and stylish backdrops promise an
              unforgettable experience.
            </p>
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "50%" }}
              transition={transition1}
            >
              <Link to={"/contact"} className="btn mb-[30px]">
                Book now and capture the magic!
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
