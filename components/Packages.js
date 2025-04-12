"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const packages = [
  {
    name: "Package A",
    features: [
      "2 hours of booth time",
      "One 4x6 or two 2x6 prints per session",
      "Unlimited photo sessions (up to 120 prints)",
      "Endless digital photos, GIFs & Boomerangs",
      "Instant sharing via Email, QR, SMS & WhatsApp",
      "Standard photo booth template",
      "Friendly booth attendant included",
      "Fun premium props",
    ],
  },
  {
    name: "Package B",
    features: [
      "3 hours of booth time",
      "Up to three 4x6 or six 2x6 prints per session",
      "Unlimited photo sessions & prints",
      "Endless digital photos, GIFs & Boomerangs",
      "Instant sharing via Email, QR, SMS & WhatsApp",
      "Custom-designed booth template",
      "Friendly booth attendant included",
      "Choose your backdrop",
      "Fun premium props",
    ],
  },
  {
    name: "Package C",
    features: [
      "4 hours of booth time",
      "Up to five 4x6 or ten 2x6 prints per session",
      "Unlimited photo sessions & prints",
      "Endless digital photos, GIFs & Boomerangs",
      "Instant sharing via Email, QR, SMS & WhatsApp",
      "Custom-designed booth template",
      "Friendly booth attendant included",
      "Choose your backdrop",
      "Fun premium props",
    ],
  },
];

const addOns = [
  {
    name: "Audio Guest Book",
    description:
      "Let guests leave heartfelt voice messages. You'll receive a downloadable link after the event.",
    price: "$150",
  },
  {
    name: "Extra Hour of Fun",
    description: "Extend the booth time to capture even more memories.",
    price: "$120",
  },
  {
    name: "Travel Outside Winnipeg",
    description: "No charge within Winnipeg. Outside the city: $1.00/km.",
    price: "Varies",
  },
  {
    name: "No Branding",
    description: "Remove our logo and rbmphotobooth.ca from your photo booth template.",
    price: "$50",
  },
  {
    name: "Unlimited Prints",
    description:
      "Let every guest take home a print from each session. Starts at $145 — final price may vary based on guest count.",
    price: "$145+",
  },
  {
    name: "Custom Welcome Screen",
    description: "Add your own images and animations to greet guests.",
    price: "$45",
  },
];

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };
  
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  
  const Packages = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  
    if (inView) controls.start('visible');
  
    return (
      <section id="packages" className="bg-gray-50 py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl font-extrabold mb-16"
          >
            Our Photo Booth Packages
          </motion.h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-xl text-left transform hover:scale-[1.02] transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{pkg.name}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
  
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            className="mt-24 text-left"
          >
            <h3 className="text-2xl font-bold mb-4">Optional Add-ons</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-white p-4 rounded-xl shadow-md"
                >
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </div>
                  <div className="mt-2 font-medium text-indigo-600">{item.price}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <button
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-indigo-700 transition"
            >
              Let&apos;s Talk Pricing
            </button>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default Packages;