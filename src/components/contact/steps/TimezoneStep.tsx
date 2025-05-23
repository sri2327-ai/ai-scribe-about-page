import React, { useState } from 'react';
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

  // Comprehensive timezone groups with proper geographical organization
  const timezoneGroups = {
    "🇺🇸 US/Canada": [
      { value: "America/New_York", label: "Eastern Time (EST/EDT)", subtext: "New York, Toronto, Boston" },
      { value: "America/Chicago", label: "Central Time (CST/CDT)", subtext: "Chicago, Dallas, Houston" },
      { value: "America/Denver", label: "Mountain Time (MST/MDT)", subtext: "Denver, Phoenix, Calgary" },
      { value: "America/Los_Angeles", label: "Pacific Time (PST/PDT)", subtext: "Los Angeles, Seattle, Vancouver" },
      { value: "America/Anchorage", label: "Alaska Time (AKST/AKDT)", subtext: "Anchorage, Fairbanks" },
      { value: "Pacific/Honolulu", label: "Hawaii Time (HST)", subtext: "Honolulu, Hilo" },
      { value: "America/Halifax", label: "Atlantic Time (AST/ADT)", subtext: "Halifax, Moncton" },
      { value: "America/St_Johns", label: "Newfoundland Time (NST/NDT)", subtext: "St. John's" },
    ],
    "🌎 America": [
      { value: "America/Mexico_City", label: "Central Time (CST)", subtext: "Mexico City, Guadalajara" },
      { value: "America/Sao_Paulo", label: "Brasília Time (BRT)", subtext: "São Paulo, Rio de Janeiro" },
      { value: "America/Buenos_Aires", label: "Argentina Time (ART)", subtext: "Buenos Aires, Córdoba" },
      { value: "America/Lima", label: "Peru Time (PET)", subtext: "Lima, Arequipa" },
      { value: "America/Bogota", label: "Colombia Time (COT)", subtext: "Bogotá, Medellín" },
      { value: "America/Santiago", label: "Chile Time (CLT)", subtext: "Santiago, Valparaíso" },
      { value: "America/Caracas", label: "Venezuela Time (VET)", subtext: "Caracas, Maracaibo" },
    ],
    "🌍 Europe": [
      { value: "Europe/London", label: "Greenwich Mean Time (GMT/BST)", subtext: "London, Dublin, Edinburgh" },
      { value: "Europe/Paris", label: "Central European Time (CET/CEST)", subtext: "Paris, Berlin, Rome" },
      { value: "Europe/Madrid", label: "Central European Time (CET/CEST)", subtext: "Madrid, Barcelona" },
      { value: "Europe/Amsterdam", label: "Central European Time (CET/CEST)", subtext: "Amsterdam, Brussels" },
      { value: "Europe/Stockholm", label: "Central European Time (CET/CEST)", subtext: "Stockholm, Oslo, Copenhagen" },
      { value: "Europe/Athens", label: "Eastern European Time (EET/EEST)", subtext: "Athens, Helsinki, Bucharest" },
      { value: "Europe/Moscow", label: "Moscow Time (MSK)", subtext: "Moscow, St. Petersburg" },
      { value: "Europe/Zurich", label: "Central European Time (CET/CEST)", subtext: "Zurich, Vienna" },
    ],
    "🌏 Asia": [
      { value: "Asia/Tokyo", label: "Japan Standard Time (JST)", subtext: "Tokyo, Osaka, Kyoto" },
      { value: "Asia/Shanghai", label: "China Standard Time (CST)", subtext: "Beijing, Shanghai, Shenzhen" },
      { value: "Asia/Singapore", label: "Singapore Time (SGT)", subtext: "Singapore, Kuala Lumpur" },
      { value: "Asia/Hong_Kong", label: "Hong Kong Time (HKT)", subtext: "Hong Kong, Macau" },
      { value: "Asia/Seoul", label: "Korea Standard Time (KST)", subtext: "Seoul, Busan" },
      { value: "Asia/Bangkok", label: "Indochina Time (ICT)", subtext: "Bangkok, Ho Chi Minh City" },
      { value: "Asia/Kolkata", label: "India Standard Time (IST)", subtext: "Mumbai, Delhi, Bangalore" },
      { value: "Asia/Dubai", label: "Gulf Standard Time (GST)", subtext: "Dubai, Abu Dhabi, Doha" },
      { value: "Asia/Karachi", label: "Pakistan Standard Time (PKT)", subtext: "Karachi, Lahore" },
      { value: "Asia/Manila", label: "Philippines Time (PST)", subtext: "Manila, Cebu" },
    ],
    "🌊 Pacific": [
      { value: "Pacific/Auckland", label: "New Zealand Time (NZST/NZDT)", subtext: "Auckland, Wellington" },
      { value: "Pacific/Sydney", label: "Australian Eastern Time (AEST/AEDT)", subtext: "Sydney, Melbourne" },
      { value: "Pacific/Fiji", label: "Fiji Time (FJT)", subtext: "Suva, Nadi" },
      { value: "Pacific/Tahiti", label: "Tahiti Time (TAHT)", subtext: "Papeete" },
      { value: "Pacific/Guam", label: "Chamorro Time (ChST)", subtext: "Guam, Saipan" },
    ],
    "🇦🇺 Australia": [
      { value: "Australia/Sydney", label: "Australian Eastern Time (AEST/AEDT)", subtext: "Sydney, Melbourne, Brisbane" },
      { value: "Australia/Perth", label: "Australian Western Time (AWST)", subtext: "Perth, Mandurah" },
      { value: "Australia/Adelaide", label: "Australian Central Time (ACST/ACDT)", subtext: "Adelaide, Darwin" },
      { value: "Australia/Hobart", label: "Australian Eastern Time (AEST/AEDT)", subtext: "Hobart, Launceston" },
    ],
    "🌍 Africa": [
      { value: "Africa/Cairo", label: "Eastern European Time (EET)", subtext: "Cairo, Alexandria" },
      { value: "Africa/Lagos", label: "West Africa Time (WAT)", subtext: "Lagos, Abuja, Accra" },
      { value: "Africa/Johannesburg", label: "South Africa Time (SAST)", subtext: "Johannesburg, Cape Town" },
      { value: "Africa/Nairobi", label: "East Africa Time (EAT)", subtext: "Nairobi, Kampala, Addis Ababa" },
      { value: "Africa/Casablanca", label: "Western European Time (WET)", subtext: "Casablanca, Rabat" },
    ],
    "🌊 Atlantic": [
      { value: "Atlantic/Azores", label: "Azores Time (AZOT/AZOST)", subtext: "Azores, Portugal" },
      { value: "Atlantic/Cape_Verde", label: "Cape Verde Time (CVT)", subtext: "Praia, Mindelo" },
      { value: "Atlantic/Reykjavik", label: "Greenwich Mean Time (GMT)", subtext: "Reykjavik" },
      { value: "Atlantic/Bermuda", label: "Atlantic Time (AST/ADT)", subtext: "Hamilton, Bermuda" },
    ],
    "🌐 UTC": [
      { value: "UTC", label: "Coordinated Universal Time (UTC)", subtext: "Universal Standard Time" },
      { value: "GMT", label: "Greenwich Mean Time (GMT)", subtext: "GMT+0, London Winter Time" },
    ],
  };

  const TimezoneButton = ({ zone }: { zone: any }) => (
    <button
      type="button"
      onClick={() => handleTimezoneSelect(zone.value)}
      className={`w-full p-3 flex items-center justify-between text-left transition-all duration-200 rounded-lg border-2 hover:scale-[1.01] ${
        timeZone === zone.value 
          ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg transform scale-[1.01]' 
          : 'bg-white hover:bg-[#387E89]/10 hover:border-[#387E89] border-gray-200 text-gray-700 shadow-sm'
      }`}
    >
      <div className="flex items-start gap-2 flex-1 min-w-0">
        <div className="flex-shrink-0 mt-0.5">
          <Globe className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-1">
            <span className="font-semibold text-sm truncate">
              {zone.label}
            </span>
          </div>
          <div className={`text-xs truncate ${
            timeZone === zone.value ? 'text-white/80' : 'text-gray-500'
          }`}>
            {zone.subtext}
          </div>
        </div>
      </div>
      {timeZone === zone.value && (
        <Check className="h-4 w-4 flex-shrink-0 ml-2" />
      )}
    </button>
  );

  return (
    <div className="h-full flex flex-col max-h-[400px]">
      {/* Compact Header */}
      <div className="text-center p-2 pb-3 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2">
          <Globe className="w-6 h-6 text-[#387E89]" />
        </div>
        <h3 className="text-lg font-bold text-[#133255] mb-1">Select Your Timezone</h3>
        <p className="text-sm text-gray-600">Choose your preferred timezone for the demo</p>
      </div>

      {/* Timezone list with fixed height and scrolling */}
      <div className="flex-1 min-h-0 overflow-hidden px-2">
        <ScrollArea className="h-full w-full">
          <div className="space-y-3 pr-2">
            {Object.entries(timezoneGroups).map(([groupName, zones]) => (
              <div key={groupName} className="space-y-2">
                <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 pb-1">
                  <h4 className="text-sm font-bold text-[#133255] border-b-2 border-[#387E89] pb-1">
                    {groupName}
                  </h4>
                </div>
                <div className="space-y-2">
                  {zones.map((zone) => (
                    <TimezoneButton key={zone.value} zone={zone} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Selected timezone confirmation */}
      {timeZone && (
        <div className="mt-2 text-center p-2 bg-green-50 rounded-lg border border-green-200 flex-shrink-0">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Check className="h-4 w-4 text-green-600" />
            <p className="text-xs font-medium text-green-700">Selected Timezone</p>
          </div>
          <p className="text-sm font-bold text-green-800">
            {Object.values(timezoneGroups).flat().find(z => z.value === timeZone)?.label || timeZone}
          </p>
        </div>
      )}
    </div>
  );
};

export default TimezoneStep;
