'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Packages', id: 'packages' },
  { name: 'Backdrops', id: 'backdrops' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          RBM Photobooth
        </motion.div>

        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) =>
            item.link ? (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={item.link}>{item.name}</Link>
              </motion.div>
            ) : (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-gray-700 transition"
              >
                {item.name}
              </motion.button>
            )
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            ☰
          </motion.button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-lg px-4 py-2 space-y-2 text-sm overflow-hidden"
          >
            {navItems.map((item) =>
              item.link ? (
                <Link key={item.name} href={item.link} className="block">
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left"
                >
                  {item.name}
                </button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
