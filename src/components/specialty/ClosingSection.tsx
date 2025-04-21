
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
        <p className="text-lg mb-8 text-gray-100">
          See how S10.AI's specialty-specific AI can enhance your care delivery and improve clinician well-being.
        </p>
        <Button 
          variant="default"
          className="bg-white text-[#143151] hover:bg-gray-100 px-8 py-2 rounded-md"
        >
          See Demo
        </Button>
      </div>
    </section>
  );
};

export default ClosingSection;
