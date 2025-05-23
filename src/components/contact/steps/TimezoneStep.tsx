
import React from 'react';
import { Globe } from "lucide-react";

interface TimezoneStepProps {
  timeZone: string;
  setTimeZone: (zone: string) => void;
  timeZoneOptions: string[];
}

const TimezoneStep = ({ timeZone, setTimeZone, timeZoneOptions }: TimezoneStepProps) => {
  const handleTimezoneSelect = (zone: string) => {
    console.log('Timezone selected:', zone);
    setTimeZone(zone);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Globe className="w-8 h-8 text-[#387E89]" />
        </div>
        <h3 className="text-xl font-semibold text-[#133255] mb-2">Select Your Timezone</h3>
        <p className="text-gray-600">Choose your preferred timezone for the demo</p>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700 text-center mb-4">Available timezones:</p>
        <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto">
          {timeZoneOptions.map((zone) => (
            <button
              key={zone}
              type="button"
              onClick={() => handleTimezoneSelect(zone)}
              className={`w-full h-12 flex items-center justify-center gap-3 text-base transition-all duration-200 rounded-lg border-2 font-medium touch-manipulation ${
                timeZone === zone 
                  ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg transform scale-[1.02]' 
                  : 'bg-white hover:bg-gray-50 hover:border-[#387E89] hover:text-[#387E89] border-gray-200 text-gray-700 active:bg-gray-100'
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Globe className="h-4 w-4" />
              {zone}
            </button>
          ))}
        </div>
        
        {timeZone && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Selected timezone:</p>
            <p className="text-lg font-medium text-[#387E89]">{timeZone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimezoneStep;
