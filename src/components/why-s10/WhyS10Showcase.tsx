
import React from "react";

const WhyS10Showcase = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            The Future of Healthcare AI is Here
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            S10.AI's advanced artificial intelligence is designed to transform healthcare 
            delivery, enhancing both provider efficiency and patient outcomes.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/lovable-uploads/a72050cf-4ed6-4347-83df-a477f191bd59.png" 
              alt="S10.AI Healthcare Technology Platform" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">Next Generation Healthcare Intelligence</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Built with precision AI engineering and sophisticated machine learning, S10.AI seamlessly 
              integrates into healthcare environments, from individual practices to large health systems, 
              providing intelligent assistance and enriching both provider and patient experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyS10Showcase;
