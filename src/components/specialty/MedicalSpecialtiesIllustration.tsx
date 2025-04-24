
import React from 'react';
import { Heart, Brain, Microscope, Baby, Bone, Wind, Stethoscope, Eye, Pill } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MedicalSpecialtiesIllustration = () => {
  const isMobile = useIsMobile();

  // Adjust positioning based on screen size
  const getPositions = () => {
    if (isMobile) {
      return {
        Heart: "top-[10%] left-[25%]",
        Brain: "top-[10%] right-[25%]",
        Microscope: "top-[30%] right-[25%]", 
        Baby: "top-[30%] left-[25%]",
        Bone: "top-[50%] left-[25%]",
        Wind: "top-[50%] right-[25%]",
        Stethoscope: "top-[70%] left-[25%]",
        Eye: "top-[70%] right-[25%]",
        Pill: "top-[90%] left-[50%] -translate-x-1/2",
      };
    }
    
    return {
      Heart: "top-[15%] left-[20%]",
      Brain: "top-[15%] right-[20%]",
      Microscope: "bottom-[15%] right-[20%]",
      Baby: "bottom-[15%] left-[20%]",
      Bone: "top-[40%] left-[15%]",
      Wind: "bottom-[40%] right-[15%]",
      Stethoscope: "top-[25%] left-[45%]",
      Eye: "top-[60%] right-[25%]",
      Pill: "bottom-[30%] left-[45%]",
    };
  };

  const positions = getPositions();
  
  const specialties = [
    { Icon: Heart, name: 'Cardiology', position: positions.Heart, size: "large" },
    { Icon: Brain, name: 'Neurology', position: positions.Brain, size: "small" },
    { Icon: Microscope, name: 'Pathology', position: positions.Microscope, size: "large" },
    { Icon: Baby, name: 'Pediatrics', position: positions.Baby, size: "small" },
    { Icon: Bone, name: 'Orthopedics', position: positions.Bone, size: "large" },
    { Icon: Wind, name: 'Pulmonology', position: positions.Wind, size: "small" },
    { Icon: Stethoscope, name: 'Internal Med', position: positions.Stethoscope, size: "large" },
    { Icon: Eye, name: 'Ophthalmology', position: positions.Eye, size: "small" },
    { Icon: Pill, name: 'Primary Care', position: positions.Pill, size: "large" },
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <div className="relative w-full h-full">
        {specialties.map(({ Icon, name, position, size }, index) => (
          <div
            key={index}
            className={`absolute ${position} transform ${position.includes('-translate') ? '' : '-translate-x-1/2 -translate-y-1/2'}`}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center p-2">
                <Icon
                  className={`text-[#143151] transition-all duration-300 group-hover:text-white ${
                    size === 'large' ? 'w-10 h-10 md:w-12 md:h-12' : 'w-7 h-7 md:w-8 md:h-8'
                  }`}
                />
                <span className="text-xs font-medium text-[#143151] max-w-[80px] text-center truncate mt-1">
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
