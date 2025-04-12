'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mePnVGV8z5TK2rqe/rbm-photo-YZ9xEewManiBOwQR.jpg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mePnVGV8z5TK2rqe/img_1546_20231028_135504-AwvPZjK9wRh7bQZ0.jpg',
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mePnVGV8z5TK2rqe/nbf-associate-symposium-21-of-23-mePvw56poouJ310n.jpg',
];

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const HomeHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`carousel-${i}`}
            initial="initial"
            animate={i === index ? 'animate' : 'exit'}
            variants={fadeVariants}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className={`absolute inset-0 w-full h-full object-cover ${
              i === index ? 'z-10' : 'z-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-20" /> {/* Overlay */}
      </div>

      {/* Foreground Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Make Every Moment Unforgettable
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          Experience next-level photo booth fun with customized backdrops, instant sharing, and unforgettable vibes.
        </motion.p>
        <motion.button
          onClick={() => {
            const contact = document.getElementById('contact');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
        >
          Book Your Event
        </motion.button>
      </div>
    </section>
  );
};

export default HomeHero;
