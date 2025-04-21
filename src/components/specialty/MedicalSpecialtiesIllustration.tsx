
import React from 'react';
import { Heart, Brain, Microscope, Baby, Bone, Wind, Stethoscope, Eye, Pill } from 'lucide-react';

const MedicalSpecialtiesIllustration = () => {
  const specialties = [
    { Icon: Heart, name: 'Cardiology', position: "top-[15%] left-[25%]", size: "large" },
    { Icon: Brain, name: 'Neurology', position: "top-[30%] right-[20%]", size: "small" },
    { Icon: Microscope, name: 'Pathology', position: "bottom-[20%] right-[30%]", size: "large" },
    { Icon: Baby, name: 'Pediatrics', position: "bottom-[35%] left-[15%]", size: "small" },
    { Icon: Bone, name: 'Orthopedics', position: "top-[45%] left-[35%]", size: "large" },
    { Icon: Wind, name: 'Pulmonology', position: "bottom-[25%] right-[15%]", size: "small" },
    { Icon: Stethoscope, name: 'Internal Med', position: "center top-[50%] left-[50%]", size: "large" },
    { Icon: Eye, name: 'Ophthalmology', position: "top-[20%] right-[35%]", size: "small" },
    { Icon: Pill, name: 'Primary Care', position: "bottom-[40%] left-[45%]", size: "large" },
  ];

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <div className="relative w-full h-full">
        {specialties.map(({ Icon, name, position, size }, index) => (
          <div
            key={index}
            className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2`}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center">
                <Icon
                  className={`text-[#143151] transition-all duration-300 group-hover:text-white ${
                    size === 'large' ? 'w-12 h-12' : 'w-8 h-8'
                  }`}
                />
                <span className="text-xs mt-1 text-[#143151] font-medium max-w-[80px] text-center truncate">
                  {name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalSpecialtiesIllustration;
