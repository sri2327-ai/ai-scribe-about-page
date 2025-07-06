
import React from 'react';
import { ProductCarousel } from './ProductCarousel';

export const FourthSection = () => {
  return (
    <section 
      className="py-16 px-4 md:px-8 lg:px-16 bg-white" 
      style={{ minHeight: '800px' }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        <div className="max-w-[900px] mx-auto text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#143151] mb-4">
              Software Solutions with Ambient AI—Built to Power Your Healthcare Practice
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Our AI solutions streamline medical workflows and improve patient care through intelligent automation. Designed specifically for clinicians, these tools adapt to your specialty and integrate seamlessly with your existing systems.
            </p>
          </div>
        </div>
        
        <ProductCarousel />
      </div>
    </section>
  );
};

export default FourthSection;
