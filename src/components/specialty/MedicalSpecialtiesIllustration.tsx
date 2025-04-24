
import React from 'react';
import { Heart, Brain, Microscope, Baby, Bone, Wind, Stethoscope, Eye, Pill } from 'lucide-react';
import { useWindowSize } from '@/hooks/use-window-size';

const MedicalSpecialtiesIllustration = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const specialties = [
    { Icon: Heart, name: 'Cardiology', angle: 0 },
    { Icon: Brain, name: 'Neurology', angle: 45 },
    { Icon: Microscope, name: 'Pathology', angle: 90 },
    { Icon: Baby, name: 'Pediatrics', angle: 135 },
    { Icon: Bone, name: 'Orthopedics', angle: 180 },
    { Icon: Wind, name: 'Pulmonology', angle: 225 },
    { Icon: Stethoscope, name: 'Internal Med', angle: 270 },
    { Icon: Eye, name: 'Ophthalmology', angle: 315 },
    { Icon: Pill, name: 'Primary Care' }
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Center icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex flex-col items-center p-4">
            <Pill className="w-12 h-12 md:w-16 md:h-16 text-[#143151] transition-all duration-300 group-hover:text-white" />
            <span className="text-sm md:text-base font-medium text-[#143151] text-center mt-2">
              Primary Care
            </span>
          </div>
        </div>
      </div>

      {/* Surrounding specialties */}
      {specialties.slice(0, -1).map(({ Icon, name, angle }, index) => {
        const radius = isMobile ? 120 : 180;
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        return (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center p-2">
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#143151] transition-all duration-300 group-hover:text-white" />
                <span className="text-xs md:text-sm font-medium text-[#143151] text-center mt-1 whitespace-nowrap">
                  {name}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MedicalSpecialtiesIllustration;
