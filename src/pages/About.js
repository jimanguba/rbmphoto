import React from "react";
import AboutImg from "../img/about/about.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions.js";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section pt-32"
    >
      <div className="container mx-auto h-full relative">
        {/* txt and img */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-4 md:gap-x-24 text-center lg:text-left">
          {/* img */}
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden"
          >
            <img src={AboutImg} alt="RBM Photo Booth - Who We Are" />
          </motion.div> */}
          {/* txt */}
          <div className="flex-1 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start px-4 md:px-0">
            <motion.h1
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transition1}
              className="h1 text-4xl md:text-6xl lg:text-8xl text-center"
            >
              Who We Are
            </motion.h1>
            <p>
              Welcome to RBM Photo Booth, your trusted source for delightful
              photo booth rentals in Winnipeg, MB, and the surrounding areas!
              <br />
              <br />
              As a family-run business, we truly understand the value of
              treasured moments and the happiness they bring. Our friendly team
              consists of a husband-and-wife duo, working together with a shared
              passion to bring smiles and laughter to your special occasions.
              <br />
              <br />
              Located right in the heart of Winnipeg, we take great pride in
              providing personalized photo booth experiences for weddings,
              birthdays, and all events worth celebrating!
              <br />
              <br />
              Our mission is simple – to make your event unforgettable and
              fun-filled! Whether you're hosting an indoor gathering or
              venturing beyond the city, we're thrilled to be part of your
              journey.
              <br />
              <br />
              With over 20 years of photography experience and 8 years as photo
              booth operators, we have honed our craft to capture those
              picture-perfect moments. Our extensive collection of props and
              backdrops ensures that everyone can let loose and strike their
              best poses.
              <br />
              <br />
              At RBM Photo Booth, we are a down-to-earth team that genuinely
              cares about making your celebration uniquely yours. We'll work
              closely with you to match your style and preferences, ensuring
              your photo booth experience is one-of-a-kind and reflects your
              personality.
              <br />
              <br />
              So, let's create some wonderful memories together! Reach out to us
              today, and let the laughter and merriment begin!
            </p>
            <br />
            <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-x-4 md:space-y-0">
              <Link to={"/portfolio"} className="btn">
                Photo booth pics
              </Link>
            </div>
            <br />
            <iframe
              title="RBM Photo Booth Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20605.636460357186!2d-97.13695954999999!3d49.7916206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c1df5a5f23730d%3A0x43d453b62b163ada!2sFort%20Richmond%2C%20Winnipeg%2C%20MB!5e0!3m2!1sen!2sca!4v1691378779201!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <br />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
