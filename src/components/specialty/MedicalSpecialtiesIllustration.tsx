
import React from 'react';
import { Heart, Brain, Microscope, Baby, Bone, Wind } from 'lucide-react';

const MedicalSpecialtiesIllustration = () => {
  const specialties = [
    { Icon: Heart, name: 'Cardiology', position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", size: "large" },
    { Icon: Brain, name: 'Neurology', position: "top-1/4 right-0 translate-x-1/2", size: "small" },
    { Icon: Microscope, name: 'Pathology', position: "bottom-1/4 right-0 translate-x-1/2", size: "large" },
    { Icon: Baby, name: 'Pediatrics', position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", size: "small" },
    { Icon: Bone, name: 'Orthopedics', position: "bottom-1/4 left-0 -translate-x-1/2", size: "large" },
    { Icon: Wind, name: 'Pulmonology', position: "top-1/4 left-0 -translate-x-1/2", size: "small" },
  ];

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <div className="relative w-[300px] h-[300px]">
        {specialties.map(({ Icon, name, position, size }, index) => (
          <div
            key={index}
            className={`absolute ${position} transform -translate-y-1/2`}
          >
            <div className="relative group flex flex-col items-center">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
              <Icon
                className={`relative text-[#143151] transition-all duration-300 group-hover:text-white ${
                  size === 'large' ? 'w-12 h-12' : 'w-8 h-8'
                }`}
              />
              <span className="text-xs mt-1 text-[#143151] font-medium">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalSpecialtiesIllustration;
