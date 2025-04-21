
import React from 'react';
import { Heart, Brain, Microscope, Baby, Bone, Wind } from 'lucide-react';

const MedicalSpecialtiesIllustration = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Center S10.AI text */}
      <div className="absolute z-10 text-3xl font-bold text-[#143151] bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
        s10.ai
      </div>

      {/* Specialty Icons in fixed circular layout */}
      <div className="relative w-[300px] h-[300px]">
        {[
          { Icon: Heart, position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", size: "large" },
          { Icon: Brain, position: "top-1/4 right-0 translate-x-1/2", size: "small" },
          { Icon: Microscope, position: "bottom-1/4 right-0 translate-x-1/2", size: "large" },
          { Icon: Baby, position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", size: "small" },
          { Icon: Bone, position: "bottom-1/4 left-0 -translate-x-1/2", size: "large" },
          { Icon: Wind, position: "top-1/4 left-0 -translate-x-1/2", size: "small" },
        ].map(({ Icon, position, size }, index) => (
          <div
            key={index}
            className={`absolute ${position} transform -translate-y-1/2`}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
              <Icon
                className={`relative text-[#143151] transition-all duration-300 group-hover:text-white ${
                  size === 'large' ? 'w-12 h-12' : 'w-8 h-8'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalSpecialtiesIllustration;
