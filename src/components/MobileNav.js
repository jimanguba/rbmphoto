import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { ImFacebook, ImInstagram, ImWordpress } from "react-icons/im";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-primary xl:hidden">
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>

      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li onClick={() => setOpenMenu(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <Link to="/packages">Packages</Link>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="https://www.facebook.com/photographyrbm/" target="_blank">
              <ImFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rbmbooth/" target="_blank">
              <ImInstagram />
            </a>
          </li>
          <li>
            <a href="https://blogphotobooth.wordpress.com/" target="_blank">
              <ImWordpress />
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
