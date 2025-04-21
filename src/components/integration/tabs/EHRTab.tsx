
import React from 'react';
import SyncIcon from '@mui/icons-material/Sync';
import TimerIcon from '@mui/icons-material/Timer';
import DoNotDisturbRoundedIcon from '@mui/icons-material/DoNotDisturbRounded';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';

const EHRTab = () => {
  const features = [
    {
      icon: <SyncIcon />,
      title: 'Bidirectional Syncing',
      description: 'Auto-populate medical records with AI-generated notes, patient history, and structured data.'
    },
    {
      icon: <DoNotDisturbRoundedIcon />,
      title: 'No More Copy-Paste',
      description: 'Instant documentation with real-time conversation context.'
    },
    {
      icon: <TimerIcon />,
      title: 'Complete Charting in Under 2 Minutes',
      description: 'Custom-tailored notes, automated ICD-10/HCC coding, and AI-driven accuracy.'
    }
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
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}

        <div className="mt-6">
          <p className="font-semibold text-[#143151] mb-3">Compatible with leading EHR systems:</p>
          <div className="flex flex-wrap gap-3">
            {['Epic', 'Cerner', 'Allscripts', 'Athenahealth'].map((ehr, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm"
              >
                <NoteAddRoundedIcon fontSize="small" />
                {ehr}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EHRTab;
