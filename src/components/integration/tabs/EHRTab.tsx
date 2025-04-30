
import React from 'react';
import { ArrowRightLeft, FilePlus, Clock } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import Marquee from "react-fast-marquee";

const EHRTab = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <ArrowRightLeft />,
      title: 'Bidirectional Syncing',
      description: 'Auto-populate medical records with AI-generated notes, patient history, and structured data.'
    },
    {
      icon: <FilePlus />,
      title: 'No More Copy-Paste',
      description: 'Instant documentation with real-time conversation context.'
    },
    {
      icon: <Clock />,
      title: 'Complete Charting in Under 2 Minutes',
      description: 'Custom-tailored notes, automated ICD-10/HCC coding, and AI-driven accuracy.'
    }
  ];

  const ehrPlatforms = [
    'Epic', 'Cerner', 'Allscripts', 'Athenahealth', 'eClinicalWorks', 
    'NextGen', 'Meditech', 'Practice Fusion', 'DrChrono', 'Kareo',
    'Amazing Charts', 'CareCloud', 'PrognoCIS', 'ChartLogic', 'ModMed',
    'GE Healthcare', 'McKesson', 'Greenway Health', 'AdvancedMD', 'WebPT',
    'Practice Perfect', 'TherapyNotes', 'Modernizing Medicine', 'Compulink',
    'WRS Health', 'ChARM EHR', 'CureMD', 'CentralReach', 'Nextech',
    'InSync Healthcare', 'MDConnection', 'RevolutionEHR', 'PracticeSuite',
    'Meditab', 'CareLogic', 'Valant', 'PatientNow', 'Sevocity',
    'BlueEHR', 'iPatientCare', 'MedicsCloud', 'OfficeAlly', 'PowerDMS'
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="grid gap-5 sm:gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white mx-auto sm:mx-0 mb-3 sm:mb-0">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#143151] text-center sm:text-left">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base text-center sm:text-left">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="font-semibold text-[#143151] mb-3 text-center sm:text-left">Compatible EHR Systems:</p>
        <div className="w-full overflow-hidden rounded-lg">
          <Marquee
            gradient={true}
            gradientColor={"rgb(255, 255, 255)"}
            gradientWidth={50}
            speed={40}
            pauseOnHover={true}
            className="py-2"
          >
            {ehrPlatforms.map((ehr, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm mx-2 transform hover:scale-105 transition-transform duration-200"
              >
                {index % 3 === 0 ? <ArrowRightLeft size={16} /> : 
                 index % 3 === 1 ? <FilePlus size={16} /> : 
                 <Clock size={16} />}
                {ehr}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default EHRTab;
