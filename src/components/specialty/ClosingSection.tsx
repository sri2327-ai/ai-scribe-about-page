
import React from 'react';
import styles from "@/styles/specialties.module.scss";
import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  return (
    <section className='witSp bg-gradient-to-r from-[#143151] to-[#387E89]' style={{minHeight:'20vh'}}>
      <div className={`${styles.closing} text-white`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Discover why S10.AI is the perfect fit for your specialty.
        </h2>
        <p className="text-lg mb-8 text-white">
          See how S10.AI's specialty-specific AI can enhance your care delivery and improve clinician well-being.
        </p>
        <Button 
          variant="outline"
          className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8"
        >
          See Demo
        </Button>
      </div>
    </section>
  );
};

export default ClosingSection;
