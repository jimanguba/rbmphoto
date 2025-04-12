'use client';

import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold mb-6"
        >
          Who We Are
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-lg text-gray-700 leading-relaxed mb-6"
        >
          Welcome to <strong>RBM Photo Booth rental</strong>, your trusted source for delightful photo booth rentals in Winnipeg, MB, and beyond! As a family-run business, we understand the value of treasured moments and the joy they bring. With a skilled and passionate team, we bring laughter and connection to every event we’re part of.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-lg text-gray-700 leading-relaxed mb-6"
        >
          Based in the heart of Winnipeg, we proudly offer personalized photo booth experiences for weddings, birthdays, corporate events, anniversaries, socials, proms—every celebration worth remembering! Whether your event is indoors or outdoors, we’re excited to be part of it.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-lg text-gray-700 leading-relaxed mb-6"
        >
          With <strong>20+ years in photography</strong> and a decade of photo booth expertise, we've mastered the art of capturing those picture-perfect moments. Our diverse collection of backdrops and props helps everyone feel comfortable, confident, and ready to strike a pose.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-lg text-gray-700 leading-relaxed mb-6"
        >
          We’re a down-to-earth team that truly cares about making your celebration unforgettable. Every event is different—so we work closely with you to tailor the experience to your vibe, style, and personality.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-lg text-gray-700 leading-relaxed mb-6"
        >
          From <strong>corporate events to weddings, school dances to bridal showers</strong>, our customizable booths, digital overlays, and themed props make each photo session one-of-a-kind.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-8 bg-indigo-50 p-6 rounded-xl border border-indigo-200"
        >
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            🎉 Consumer Choice Award Winner – 2025
          </h3>
          <p className="text-gray-700">
            We're honored to be recognized as Winnipeg’s leading photo booth rental company. This award reflects our commitment to quality, service, and customer satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
