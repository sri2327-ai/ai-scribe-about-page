
import React from 'react';
import styles from "@/styles/specialties.module.scss";
import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  return (
    <section className='witSp' style={{minHeight:'20vh'}}>
      <div className={styles.closing}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#143151]">
          Discover why S10.AI is the perfect fit for your specialty.
        </h2>
        <p className="text-lg mb-8 text-gray-700">
          See how S10.AI's specialty-specific AI can enhance your care delivery and improve clinician well-being.
        </p>
        <Button 
          variant="default"
          className="bg-[#143151] hover:bg-[#0f253d] text-white px-8 py-2 rounded-md"
        >
          See Demo
        </Button>
      </div>
    </section>
  );
};

export default ClosingSection;
