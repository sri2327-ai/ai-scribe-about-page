
import React from 'react';
import { Database, FileText, UserRound, Clock, Server, BookText } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

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
    'Amazing Charts', 'CareCloud', 'PrognoCIS', 'ChartLogic', 'ModMed'
  ];

  const pmsFeatures = ['Scheduling', 'Billing', 'Claims', 'Analytics', 'Patient Portal'];

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
          <div className="flex flex-wrap gap-3">
            {ehrPlatforms.map((ehr, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm"
              >
                <FileText size={16} />
                {ehr}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold text-[#143151] mb-3">Practice Management Features:</p>
          <div className="flex flex-wrap gap-3">
            {pmsFeatures.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm"
              >
                <Server size={16} />
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EHRTab;
