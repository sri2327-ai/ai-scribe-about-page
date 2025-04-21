
import React from 'react';
import { Heart, Brain, Microscope, Baby, Bone, Wind } from 'lucide-react';

const MedicalSpecialtiesIllustration = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-gradient-to-b from-white to-blue-50/30">
      {/* Center s10.ai text */}
      <div className="absolute z-10 text-3xl font-bold text-[#143151] bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl">
        s10.ai
      </div>

      {/* Specialty Icons in circular layout with enhanced styling */}
      <div className="relative w-[300px] h-[300px] animate-[spin_20s_linear_infinite]">
        {[
          { Icon: Heart, position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", label: "Cardiology" },
          { Icon: Brain, position: "top-1/4 right-0 translate-x-1/2", label: "Neurology" },
          { Icon: Microscope, position: "bottom-1/4 right-0 translate-x-1/2", label: "Oncology" },
          { Icon: Baby, position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", label: "Pediatrics" },
          { Icon: Bone, position: "bottom-1/4 left-0 -translate-x-1/2", label: "Orthopedics" },
          { Icon: Wind, position: "top-1/4 left-0 -translate-x-1/2", label: "Pulmonology" },
        ].map(({ Icon, position, label }, index) => (
          <div
            key={index}
            className={`absolute ${position} transform -translate-y-1/2`}
          >
            <div className="relative group">
              {/* Enhanced background effect */}
              <div className="absolute -inset-4 bg-white rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Icon container with enhanced styling */}
              <div className="relative bg-white rounded-xl p-3 shadow-md group-hover:shadow-xl transition-all duration-300">
                <Icon 
                  className="w-8 h-8 text-[#143151] transition-all duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>

              {/* Label that appears on hover */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium text-[#143151]">
                {label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,49,81,0.05)_0%,transparent_70%)]" />
    </div>
  );
};

export default MedicalSpecialtiesIllustration;
