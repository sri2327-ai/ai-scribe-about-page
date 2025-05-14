
import React from 'react';
import styles from "@/styles/specialties.module.scss";
import InteractiveSpecialties from './InteractiveSpecialties';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';

const SpecialtiesGrid = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6">
      <div className={styles.specialties}>
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <h2 className={cn(typography.h2, "text-center max-w-4xl mx-auto")}>
            The S10.AI Advantage: Custom AI for Every Medical Specialty
          </h2>
          <div className="w-20 h-1 bg-gray-900" />
          <p className={cn(typography.description, styles.subtext)}>
            Our platform stands out by customizing AI models for each medical field, ensuring that documentation is both accurate and relevant, whether it's for a primary care physician, specialist, or allied health professional.
          </p>
        </div>

        <InteractiveSpecialties />
      </div>
    </section>
  );
};

export default SpecialtiesGrid;
