
import React, { useState } from 'react';
import { Globe, Check, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

interface TimezoneStepProps {
  timeZone: string;
  setTimeZone: (zone: string) => void;
  timeZoneOptions: string[];
}

const TimezoneStep = ({ timeZone, setTimeZone, timeZoneOptions }: TimezoneStepProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleTimezoneSelect = (zone: string) => {
    console.log('Timezone selected:', zone);
    setTimeZone(zone);
  };

  // Enhanced timezone groups with better organization
  const timezoneGroups = {
    "🇺🇸 United States & Canada": [
      { value: "America/New_York", label: "Eastern Time", subtext: "New York, Toronto", popular: true },
      { value: "America/Chicago", label: "Central Time", subtext: "Chicago, Dallas", popular: true },
      { value: "America/Denver", label: "Mountain Time", subtext: "Denver, Phoenix", popular: true },
      { value: "America/Los_Angeles", label: "Pacific Time", subtext: "Los Angeles, Vancouver", popular: true },
      { value: "America/Anchorage", label: "Alaska Time", subtext: "Anchorage" },
      { value: "Pacific/Honolulu", label: "Hawaii Time", subtext: "Honolulu" },
      { value: "America/Halifax", label: "Atlantic Time", subtext: "Halifax" },
    ],
    "🌍 Europe": [
      { value: "Europe/London", label: "GMT", subtext: "London, Dublin", popular: true },
      { value: "Europe/Paris", label: "CET", subtext: "Paris, Berlin, Rome", popular: true },
      { value: "Europe/Madrid", label: "CET", subtext: "Madrid, Barcelona" },
      { value: "Europe/Amsterdam", label: "CET", subtext: "Amsterdam, Brussels" },
      { value: "Europe/Stockholm", label: "CET", subtext: "Stockholm, Oslo" },
      { value: "Europe/Moscow", label: "MSK", subtext: "Moscow" },
      { value: "Europe/Athens", label: "EET", subtext: "Athens, Helsinki" }
    ],
    "🌏 Asia Pacific": [
      { value: "Asia/Tokyo", label: "JST", subtext: "Tokyo, Osaka", popular: true },
      { value: "Asia/Shanghai", label: "CST", subtext: "Beijing, Shanghai", popular: true },
      { value: "Asia/Singapore", label: "SGT", subtext: "Singapore, Kuala Lumpur", popular: true },
      { value: "Asia/Hong_Kong", label: "HKT", subtext: "Hong Kong" },
      { value: "Asia/Seoul", label: "KST", subtext: "Seoul" },
      { value: "Asia/Bangkok", label: "ICT", subtext: "Bangkok, Jakarta" },
      { value: "Asia/Kolkata", label: "IST", subtext: "Mumbai, Delhi", popular: true },
      { value: "Asia/Dubai", label: "GST", subtext: "Dubai, Abu Dhabi" }
    ],
    "🇦🇺 Australia & Oceania": [
      { value: "Australia/Sydney", label: "AEST", subtext: "Sydney, Melbourne", popular: true },
      { value: "Australia/Perth", label: "AWST", subtext: "Perth" },
      { value: "Australia/Adelaide", label: "ACST", subtext: "Adelaide" },
      { value: "Australia/Brisbane", label: "AEST", subtext: "Brisbane" },
      { value: "Pacific/Auckland", label: "NZST", subtext: "Auckland" }
    ]
  };

  // Filter timezones based on search
  const filteredGroups = Object.entries(timezoneGroups).reduce((acc, [groupName, zones]) => {
    const filteredZones = zones.filter(zone => 
      zone.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      zone.subtext.toLowerCase().includes(searchTerm.toLowerCase()) ||
      zone.value.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredZones.length > 0) {
      acc[groupName] = filteredZones;
    }
    return acc;
  }, {} as typeof timezoneGroups);

  const TimezoneButton = ({ zone }: { zone: any }) => (
    <button
      type="button"
      onClick={() => handleTimezoneSelect(zone.value)}
      className={`w-full p-4 md:p-5 flex items-center justify-between text-left transition-all duration-200 rounded-xl border-2 hover:scale-[1.02] ${
        timeZone === zone.value 
          ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg transform scale-[1.02]' 
          : 'bg-white hover:bg-[#387E89]/10 hover:border-[#387E89] border-gray-200 text-gray-700 shadow-sm'
      }`}
    >
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <div className="flex-shrink-0 mt-1">
          <Globe className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-sm md:text-base truncate">
              {zone.label}
            </span>
            {zone.popular && (
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                timeZone === zone.value 
                  ? 'bg-white/20 text-white' 
                  : 'bg-orange-100 text-orange-700'
              }`}>
                Popular
              </span>
            )}
          </div>
          <div className={`text-xs md:text-sm truncate ${
            timeZone === zone.value ? 'text-white/80' : 'text-gray-500'
          }`}>
            {zone.subtext}
          </div>
        </div>
      </div>
      {timeZone === zone.value && (
        <Check className="h-5 w-5 flex-shrink-0 ml-2" />
      )}
    </button>
  );

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="text-center p-4 md:p-6 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full mb-4">
          <Globe className="w-7 h-7 md:w-8 md:h-8 text-[#387E89]" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#133255] mb-2">Select Your Timezone</h3>
        <p className="text-sm md:text-base text-gray-600 mb-4">Choose your preferred timezone for the demo</p>
        
        {/* Search bar */}
        <div className="relative max-w-sm mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search timezones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-11 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89]"
          />
        </div>
      </div>

      {/* Timezone list */}
      <div className="flex-1 px-4 md:px-6 pb-4 md:pb-6 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="space-y-6 pr-2">
            {Object.entries(filteredGroups).map(([groupName, zones]) => (
              <div key={groupName} className="space-y-3">
                <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 pb-2">
                  <h4 className="text-base md:text-lg font-bold text-[#133255] border-b-2 border-[#387E89] pb-2">
                    {groupName}
                  </h4>
                </div>
                <div className="space-y-3">
                  {zones.map((zone) => (
                    <TimezoneButton key={zone.value} zone={zone} />
                  ))}
                </div>
              </div>
            ))}
            
            {Object.keys(filteredGroups).length === 0 && (
              <div className="text-center py-8">
                <Globe className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No timezones found matching your search</p>
              </div>
            )}
          </div>
        </ScrollArea>
        
        {/* Selected timezone confirmation */}
        {timeZone && (
          <div className="mt-4 text-center p-4 bg-green-50 rounded-xl border-2 border-green-200 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Check className="h-5 w-5 text-green-600" />
              <p className="text-sm font-medium text-green-700">Selected Timezone</p>
            </div>
            <p className="text-lg font-bold text-green-800">
              {Object.values(timezoneGroups).flat().find(z => z.value === timeZone)?.label || timeZone}
            </p>
            <p className="text-xs text-green-600 mt-1">
              {Object.values(timezoneGroups).flat().find(z => z.value === timeZone)?.subtext}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimezoneStep;
