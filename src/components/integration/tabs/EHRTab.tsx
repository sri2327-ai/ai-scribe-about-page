
import React from 'react';
import { Database, FileText, UserRound, Clock, Server, BookText, Stethoscope, Hospital } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import Marquee from "react-fast-marquee";

const EHRTab = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <Database />,
      title: 'Seamless Data Integration',
      description: 'Direct integration with your EHR system for real-time patient data synchronization and clinical documentation.'
    },
    {
      icon: <FileText />,
      title: 'Smart Clinical Documentation',
      description: 'AI-powered clinical note generation with specialty-specific templates and automated coding suggestions.'
    },
    {
      icon: <UserRound />,
      title: 'Patient Care Coordination',
      description: 'Streamline referrals, lab orders, and care team communication within your existing workflow.'
    },
    {
      icon: <Clock />,
      title: 'Time-Saving Automation',
      description: 'Reduce documentation time by 70% with automated charting and clinical decision support.'
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
      <div className="grid gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#143151]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
            </div>
          </div>
        ))}

        <div className="mt-6">
          <p className="font-semibold text-[#143151] mb-3">Compatible EHR Systems:</p>
          <div className="w-full overflow-hidden">
            <Marquee
              gradient={true}
              gradientColor={[20, 49, 81]}
              speed={40}
              pauseOnHover={true}
              className="py-2"
            >
              {ehrPlatforms.map((ehr, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm mx-2"
                >
                  {index % 3 === 0 ? <Hospital size={16} /> : 
                   index % 3 === 1 ? <Stethoscope size={16} /> : 
                   <FileText size={16} />}
                  {ehr}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EHRTab;
