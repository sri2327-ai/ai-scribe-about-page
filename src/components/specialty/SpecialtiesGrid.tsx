
import React from 'react';
import styles from "@/styles/specialties.module.scss";
import { Separator } from "@/components/ui/separator";
import InteractiveSpecialties from './InteractiveSpecialties';

const SpecialtiesGrid = () => {
  return (
    <section className="py-12">
      <div className={styles.specialties}>
        <div className="flex flex-col items-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 max-w-4xl">
            The S10.AI Advantage: Custom AI for Every Medical Specialty
          </h2>
          <Separator className="w-1/5 bg-gray-900 h-1" />
          <p className={`${styles.subtext} text-lg text-gray-900 max-w-4xl text-center`}>
            Our platform stands out by customizing AI models for each medical field, ensuring that documentation is both accurate and relevant, whether it's for a primary care physician, specialist, or allied health professional.
          </p>
        </div>

        <InteractiveSpecialties />
      </div>
    </section>
  );
};

export default SpecialtiesGrid;
