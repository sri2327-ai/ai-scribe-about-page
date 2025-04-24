
import React from 'react';
import { Heart, Brain, Microscope, Baby, Bone, Wind, Stethoscope, Eye, Pill } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useWindowSize } from '@/hooks/use-window-size';

const MedicalSpecialtiesIllustration = () => {
  const isMobile = useIsMobile();
  const { width } = useWindowSize();

  // Responsive grid layout instead of absolute positioning
  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {[
          { Icon: Heart, name: 'Cardiology', size: "large" },
          { Icon: Brain, name: 'Neurology', size: "small" },
          { Icon: Microscope, name: 'Pathology', size: "large" },
          { Icon: Baby, name: 'Pediatrics', size: "small" },
          { Icon: Bone, name: 'Orthopedics', size: "large" },
          { Icon: Wind, name: 'Pulmonology', size: "small" },
          { Icon: Stethoscope, name: 'Internal Med', size: "large" },
          { Icon: Eye, name: 'Ophthalmology', size: "small" },
          { Icon: Pill, name: 'Primary Care', size: "large" },
        ].map(({ Icon, name, size }, index) => (
          <div
            key={index}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#143151] to-[#387E89] rounded-lg opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center p-2">
                <Icon
                  className={`text-[#143151] transition-all duration-300 group-hover:text-white ${
                    size === 'large' ? 'w-10 h-10 md:w-12 md:h-12' : 'w-8 h-8 md:w-10 md:h-10'
                  }`}
                />
                <span className="text-xs font-medium text-[#143151] text-center truncate mt-1">
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
