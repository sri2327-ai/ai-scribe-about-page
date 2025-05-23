
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

  // Organized timezone groups with proper sub-timezones
  const timezoneGroups = {
    "US/Canada": [
      { value: "America/New_York", label: "Eastern Time (ET)", subtext: "New York, Toronto" },
      { value: "America/Chicago", label: "Central Time (CT)", subtext: "Chicago, Dallas" },
      { value: "America/Denver", label: "Mountain Time (MT)", subtext: "Denver, Phoenix" },
      { value: "America/Los_Angeles", label: "Pacific Time (PT)", subtext: "Los Angeles, Vancouver" },
      { value: "America/Anchorage", label: "Alaska Time (AKT)", subtext: "Anchorage" },
      { value: "Pacific/Honolulu", label: "Hawaii Time (HST)", subtext: "Honolulu" },
      { value: "America/Halifax", label: "Atlantic Time (AT)", subtext: "Halifax" },
      { value: "America/St_Johns", label: "Newfoundland Time (NT)", subtext: "St. John's" }
    ],
    "America": [
      { value: "America/Sao_Paulo", label: "Brasília Time", subtext: "São Paulo, Rio de Janeiro" },
      { value: "America/Argentina/Buenos_Aires", label: "Argentina Time", subtext: "Buenos Aires" },
      { value: "America/Lima", label: "Peru Time", subtext: "Lima" },
      { value: "America/Bogota", label: "Colombia Time", subtext: "Bogotá" },
      { value: "America/Caracas", label: "Venezuela Time", subtext: "Caracas" },
      { value: "America/Mexico_City", label: "Central Mexico", subtext: "Mexico City" },
      { value: "America/Tijuana", label: "Pacific Mexico", subtext: "Tijuana" }
    ],
    "Europe": [
      { value: "Europe/London", label: "Greenwich Mean Time", subtext: "London, Dublin" },
      { value: "Europe/Paris", label: "Central European Time", subtext: "Paris, Berlin, Rome" },
      { value: "Europe/Madrid", label: "Central European Time", subtext: "Madrid" },
      { value: "Europe/Amsterdam", label: "Central European Time", subtext: "Amsterdam" },
      { value: "Europe/Stockholm", label: "Central European Time", subtext: "Stockholm" },
      { value: "Europe/Moscow", label: "Moscow Time", subtext: "Moscow" },
      { value: "Europe/Athens", label: "Eastern European Time", subtext: "Athens" }
    ],
    "Asia": [
      { value: "Asia/Tokyo", label: "Japan Standard Time", subtext: "Tokyo, Osaka" },
      { value: "Asia/Shanghai", label: "China Standard Time", subtext: "Beijing, Shanghai" },
      { value: "Asia/Hong_Kong", label: "Hong Kong Time", subtext: "Hong Kong" },
      { value: "Asia/Singapore", label: "Singapore Time", subtext: "Singapore" },
      { value: "Asia/Seoul", label: "Korea Standard Time", subtext: "Seoul" },
      { value: "Asia/Bangkok", label: "Indochina Time", subtext: "Bangkok" },
      { value: "Asia/Kolkata", label: "India Standard Time", subtext: "Mumbai, Delhi" },
      { value: "Asia/Dubai", label: "Gulf Standard Time", subtext: "Dubai" }
    ],
    "Australia": [
      { value: "Australia/Sydney", label: "Australian Eastern Time", subtext: "Sydney, Melbourne" },
      { value: "Australia/Perth", label: "Australian Western Time", subtext: "Perth" },
      { value: "Australia/Adelaide", label: "Australian Central Time", subtext: "Adelaide" },
      { value: "Australia/Darwin", label: "Australian Central Time", subtext: "Darwin" },
      { value: "Australia/Brisbane", label: "Australian Eastern Time", subtext: "Brisbane" }
    ],
    "Africa": [
      { value: "Africa/Cairo", label: "Eastern European Time", subtext: "Cairo" },
      { value: "Africa/Lagos", label: "West Africa Time", subtext: "Lagos" },
      { value: "Africa/Johannesburg", label: "South Africa Time", subtext: "Johannesburg, Cape Town" },
      { value: "Africa/Nairobi", label: "East Africa Time", subtext: "Nairobi" },
      { value: "Africa/Casablanca", label: "Western European Time", subtext: "Casablanca" }
    ],
    "Pacific": [
      { value: "Pacific/Auckland", label: "New Zealand Time", subtext: "Auckland" },
      { value: "Pacific/Fiji", label: "Fiji Time", subtext: "Suva" },
      { value: "Pacific/Guam", label: "Chamorro Time", subtext: "Guam" }
    ],
    "UTC": [
      { value: "UTC", label: "Coordinated Universal Time", subtext: "UTC+0" }
    ]
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="text-center p-4 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
          <Globe className="w-6 h-6 text-[#387E89]" />
        </div>
        <h3 className="text-lg font-semibold text-[#133255] mb-1">Select Your Timezone</h3>
        <p className="text-sm text-gray-600">Choose your preferred timezone for the demo</p>
      </div>

      {/* Scrollable timezone list */}
      <div className="flex-1 px-4 pb-4 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="space-y-4 pr-2">
            {Object.entries(timezoneGroups).map(([groupName, zones]) => (
              <div key={groupName} className="space-y-2">
                <h4 className="text-sm font-bold text-[#133255] border-b-2 border-[#387E89] pb-2 mb-3 sticky top-0 bg-white z-10">
                  {groupName}
                </h4>
                <div className="space-y-2">
                  {zones.map((zone) => (
                    <button
                      key={zone.value}
                      type="button"
                      onClick={() => handleTimezoneSelect(zone.value)}
                      className={`w-full p-4 flex items-center justify-between text-left transition-all duration-200 rounded-lg border-2 ${
                        timeZone === zone.value 
                          ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg' 
                          : 'bg-white hover:bg-gray-50 hover:border-[#387E89] border-gray-200 text-gray-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Globe className="h-4 w-4 flex-shrink-0 mt-1" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">
                            {zone.label}
                          </div>
                          <div className={`text-xs mt-1 truncate ${
                            timeZone === zone.value ? 'text-white/80' : 'text-gray-500'
                          }`}>
                            {zone.subtext}
                          </div>
                        </div>
                      </div>
                      {timeZone === zone.value && (
                        <Check className="h-4 w-4 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        {/* Selected timezone indicator */}
        {timeZone && (
          <div className="mt-3 text-center p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-xs text-green-700">Selected timezone:</p>
            <p className="text-sm font-medium text-green-800">
              {Object.values(timezoneGroups).flat().find(z => z.value === timeZone)?.label || timeZone}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimezoneStep;
