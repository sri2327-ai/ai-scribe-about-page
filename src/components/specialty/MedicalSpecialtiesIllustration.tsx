
import React from 'react';
import { Heart, Brain, Microscope, Baby, Bone, Wind, Stethoscope, Eye, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWindowSize } from '@/hooks/use-window-size';

const MedicalSpecialtiesIllustration = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const specialties = [
    { Icon: Heart, name: 'Cardiology', angle: 0 },
    { Icon: Brain, name: 'Neurology', angle: 45 },
    { Icon: Microscope, name: 'Pathology', angle: 90 },
    { Icon: Baby, name: 'Pediatrics', angle: 135 },
    { Icon: Bone, name: 'Orthopaedics', angle: 180 },
    { Icon: Wind, name: 'Pulmonology', angle: 225 },
    { Icon: Stethoscope, name: 'Internal Medicine', angle: 270 },
    { Icon: Eye, name: 'Ophthalmology', angle: 315 },
    { Icon: Pill, name: 'Primary Care' }
  ];

  // Adjust radius based on screen size
  const getRadius = () => {
    if (isMobile) return 120;
    if (isTablet) return 150;
    return 180;
  };
  
  const radius = getRadius();

  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
      {/* Center icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link 
          to={`/specialty?specialty=${encodeURIComponent('Primary Care')}`}
          className="block"
        >
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex flex-col items-center p-4">
              <Pill className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#143151] transition-all duration-300 group-hover:text-white" />
              <span className="text-xs sm:text-sm md:text-base font-medium text-[#143151] text-center mt-2 group-hover:text-white transition-colors duration-300">
                Primary Care
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Surrounding specialties */}
      {specialties.slice(0, -1).map(({ Icon, name, angle }, index) => {
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
            <Link 
              to={`/specialty?specialty=${encodeURIComponent(name)}`}
              className="block"
            >
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col items-center p-2">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#143151] transition-all duration-300 group-hover:text-white" />
                  <span className="text-xs md:text-sm font-medium text-[#143151] text-center mt-1 whitespace-nowrap group-hover:text-white transition-colors duration-300">
                    {name}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MedicalSpecialtiesIllustration;
