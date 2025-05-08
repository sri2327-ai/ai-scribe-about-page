
import React from 'react';

const S10Demo = () => {
  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center justify-center text-gray-800 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Ready to Automate Your Clinic?</h2>
        <p className="text-lg md:text-xl mb-8 text-gray-600">
          Start your journey with S10.AI—where every step of care is intelligent, efficient, and human-centered.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-md">
            Request a Demo
          </button>
          <button className="border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">
            Download ROI Report
          </button>
        </div>
      </div>
    </div>
  );
};

export { S10Demo };
