
import React from 'react';
import styles from "@/styles/specialties.module.scss";
import { Button } from "@/components/ui/button";

const SpecialtiesBanner = () => {
  return (
    <section className='witSp' style={{ paddingLeft: '0', paddingRight: '0' }}>
      <div className={styles.heroCentered}>
        <div className={styles.hero__content}>
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#143151]">
              Transforming Healthcare,<br />One Specialty at a Time
            </h1>
            <h5 className="text-xl md:text-2xl text-gray-700">
              The Leading Ambient AI Platform with AI Models Designed<br />
              to Capture the Unique Details of Every Medical Field.
            </h5>
            <Button 
              variant="default"
              className="bg-[#143151] hover:bg-[#0f253d] text-white px-8 py-2 rounded-md"
            >
              See Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesBanner;
