import React from 'react';

const ClosingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-tr from-[#143151] to-[#387E89] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get Started Today</h2>
        <div className="flex flex-col items-center justify-center space-y-6 max-w-3xl mx-auto text-center">
          <p className="text-lg">
            Experience the power of specialty-specific AI designed for healthcare professionals. 
            Our platform adapts to your unique workflow and documentation needs.
          </p>
          <button className="px-8 py-3 bg-white text-[#143151] rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
