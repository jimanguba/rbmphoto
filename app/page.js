'use client';

import About from '@/components/About';
import GalleryPage from '@/components/Gallery';
import HomeHero from '@/components/HomeHero';
import Packages from '@/components/Packages';
import { motion } from 'framer-motion';

const Section = ({ id, title, children }) => (
  <section id={id} className="min-h-screen flex items-center justify-center py-20">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl px-6 mx-auto text-center"
    >
      {/* <h2 className="text-3xl font-bold mb-4">{title}</h2> */}

      <div className="text-lg text-gray-600">{children}</div>
    </motion.div>
  </section>
);



export default function Home() {
  return (
    <div className="relative">
      <main className="">
        <HomeHero />
        <Section id="about" title="About Us">
          <About />
        </Section>

        <Section id="packages" title="Our Packages">
          <Packages />
        </Section>

        <Section id="backdrops" title="Custom Backdrops">
          Choose from a variety of stunning backdrops — or let us create something completely custom just for you.
        </Section>
        <Section id="gallery" title="Gallery">
          <GalleryPage />
        </Section>

        <Section id="contact" title="Get in Touch">
          Ready to book or have questions? Contact us today — we’d love to be part of your event!
        </Section>
      </main>
    </div>
  );
}
