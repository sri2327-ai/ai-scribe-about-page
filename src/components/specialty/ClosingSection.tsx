
import React from 'react';
import styles from "@/styles/specialties.module.scss";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const ClosingSection = () => {
  return (
    <section className='witSp bg-gradient-to-r from-[#143151] to-[#387E89]' style={{minHeight:'20vh'}}>
      <motion.div 
        className={`${styles.closing} text-white max-w-4xl mx-auto px-4 py-10 sm:py-12 md:py-16`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
          Discover why S10.AI is the perfect fit for your specialty.
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-white opacity-90">
          See how S10.AI's specialty-specific AI can enhance your care delivery and improve clinician well-being.
        </p>
        <Button 
          variant="outline"
          className="border-2 border-white text-white hover:bg-white/10 rounded-full px-5 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base"
        >
          See Demo
        </Button>
      </motion.div>
    </section>
  );
};

export default ClosingSection;
