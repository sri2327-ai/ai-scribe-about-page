
import React from 'react';
import { Heart, Brain, Microscope, Baby, Bone, Lungs } from 'lucide-react';

const MedicalSpecialtiesIllustration = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Center S10.AI text */}
      <div className="absolute z-10 text-2xl font-bold text-[#143151] bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
        s10.ai
      </div>

      {/* Specialty Icons in circular layout */}
      <div className="relative w-[300px] h-[300px] animate-[spin_20s_linear_infinite]">
        {[
          { Icon: Heart, position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
          { Icon: Brain, position: "top-1/4 right-0 translate-x-1/2" },
          { Icon: Microscope, position: "bottom-1/4 right-0 translate-x-1/2" },
          { Icon: Baby, position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
          { Icon: Bone, position: "bottom-1/4 left-0 -translate-x-1/2" },
          { Icon: Lungs, position: "top-1/4 left-0 -translate-x-1/2" },
        ].map(({ Icon, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} transform -translate-y-1/2`}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              <Icon
                className="relative w-10 h-10 text-[#143151] transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalSpecialtiesIllustration;
