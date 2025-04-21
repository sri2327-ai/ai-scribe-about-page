import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-16 bg-gradient-to-bl from-[#143151] to-[#387E89] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg italic mb-4">
            "S10.AI has revolutionized our practice. The AI-driven insights have improved patient outcomes and streamlined our workflows."
          </p>
          <p className="text-md font-semibold">
            - Dr. John Smith, Cardiologist
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
