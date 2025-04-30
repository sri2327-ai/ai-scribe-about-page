
import React from 'react';
import styles from "@/styles/specialties.module.scss";
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <section className='witSp' style={{minHeight:'10vh'}}>
      <div className={styles.testimonial}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black leading-relaxed">
            "s10.ai is a game-changer. Its specialty-specific AI scribe not only streamlines my documentation but also ensures compliant CDI, making my workflow faster, cleaner, and worry-free."
          </h3>
          <footer>
            <p className="text-base sm:text-lg font-semibold text-black">Dr. A. Patel</p>
            <p className="text-sm sm:text-md text-gray-700">Internal Medicine</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
