
import React from 'react';
import { Globe, Check } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

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

  // Group timezones by region for better UX
  const groupedTimezones = {
    "US Timezones": [
      "America/New_York",
      "America/Chicago", 
      "America/Denver",
      "America/Los_Angeles",
      "America/Anchorage",
      "Pacific/Honolulu"
    ],
    "Popular": [
      "UTC",
      "Europe/London",
      "Europe/Paris",
      "Asia/Tokyo",
      "Australia/Sydney"
    ],
    "Other": timeZoneOptions.filter(zone => 
      !["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "America/Anchorage", "Pacific/Honolulu", "UTC", "Europe/London", "Europe/Paris", "Asia/Tokyo", "Australia/Sydney"].includes(zone)
    )
  };

  const formatTimezoneName = (zone: string) => {
    return zone.replace(/_/g, ' ').replace('America/', '').replace('Europe/', '').replace('Asia/', '').replace('Australia/', '').replace('Pacific/', '');
  };

  return (
    <div className="p-6 space-y-6 h-full flex flex-col">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Globe className="w-8 h-8 text-[#387E89]" />
        </div>
        <h3 className="text-xl font-semibold text-[#133255] mb-2">Select Your Timezone</h3>
        <p className="text-gray-600">Choose your preferred timezone for the demo</p>
      </div>

      <div className="flex-1 space-y-4">
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          <div className="space-y-6">
            {Object.entries(groupedTimezones).map(([groupName, zones]) => (
              <div key={groupName} className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700 border-b pb-1">
                  {groupName}
                </h4>
                <div className="space-y-2">
                  {zones.map((zone) => (
                    <button
                      key={zone}
                      type="button"
                      onClick={() => handleTimezoneSelect(zone)}
                      className={`w-full p-3 flex items-center justify-between text-left transition-all duration-200 rounded-lg border ${
                        timeZone === zone 
                          ? 'bg-[#387E89] text-white border-[#387E89] shadow-md' 
                          : 'bg-white hover:bg-gray-50 hover:border-[#387E89] border-gray-200 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Globe className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm font-medium">
                          {formatTimezoneName(zone)}
                        </span>
                      </div>
                      {timeZone === zone && (
                        <Check className="h-4 w-4 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        {timeZone && (
          <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-700">Selected timezone:</p>
            <p className="text-base font-medium text-green-800">{formatTimezoneName(timeZone)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimezoneStep;
